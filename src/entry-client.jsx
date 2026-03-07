import App from "./App.jsx";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { getQueryClient } from "./lib/queryClient.js";
import { QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";

const queryClient = getQueryClient();
const dehydratedState = window.__REACT_QUERY_STATE__;

async function initAuth() {
  try {
    const { me } = await import("./api/auth.js");
    const { refresh } = await import("./api/auth.js");
    const { useStore } = await import("./store/store.js");
    const { setAuthToken } = await import("./lib/axios.js");

    const tokenData = await refresh();
    setAuthToken(tokenData.accessToken);
    const user = await me();
    useStore.getState().setAuth(tokenData.accessToken, user.user);
  } catch (error) {}
}

initAuth().finally(() =>
  hydrateRoot(
    document.getElementById("root"),
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydratedState}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HydrationBoundary>
      </QueryClientProvider>
    </StrictMode>,
  ),
);
