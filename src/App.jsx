import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home....coming soon</div>} />
        <Route path="/cart" element={<div>Cart....coming soon</div>} />
        <Route
          path="/collections"
          element={<div>Collections....coming soon</div>}
        />
      </Routes>
    </>
  );
}

export default App;
