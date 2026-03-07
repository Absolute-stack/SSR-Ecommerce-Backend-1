import fs from "fs";
import "dotenv/config";
import path from "path";
import express from "express";
import { Transform } from "stream";
import { fileURLToPath } from "url";
import { render } from "./dist/entry-server.js";
import { renderToPipeableStream } from "react-dom/server";

const app = express();
const PORT = process.env.PORT;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const template = fs.readFileSync("./dist/index.html", "utf-8");
const [head, tail] = template.split("<!--ssr-outlet-->");

app.use("/assets", express.static(path.resolve(__dirname, "./dist/assets")));

app.get("*", async (req, res) => {
  const { tree, dehydratedState } = await render(req.url);

  const { pipe } = renderToPipeableStream(tree, {
    onShellReady() {
      res.status(200);
      res.setHeader("Content-Type", "text/html");
      const stateHead = head.replace(
        "</head>",
        `<script>
          window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)}
        </script></head>`,
      );
      res.write(stateHead);
      const appendtail = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, chunk);
        },
        flush(callback) {
          this.push(tail);
          callback();
        },
      });
      pipe(appendtail);
      appendtail.pipe(res);
    },
    onError(err) {
      console.error(err);
    },
  });
});

app.listen(PORT, () => console.log(`SSR Server running on ${PORT}`));
