import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const ProductsPage = lazy(() => import("./pages/Products/ProductsPage.jsx"));

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route
          path="/products"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProductsPage />
            </Suspense>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
