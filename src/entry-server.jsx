import App from "./App.jsx";
import { StrictMode } from "react";
import { makeQueryClient } from "./lib/queryClient.js";
import { StaticRouter } from "react-router-dom/server";
import { QueryClientProvider, dehydrate } from "@tanstack/react-query";
import {
  fetchProductById,
  fetchProductFilters,
  fetchProducts,
} from "./api/products.js";

export async function render(url) {
  const queryClient = makeQueryClient();

  const pathname = url.split("?")[0];
  const isHomePage = pathname === "/";
  const isProductsPage = pathname === "/products";
  const isProductDetailsPage = pathname.startsWith("/products/");

  if (isHomePage || isProductsPage) {
    await Promise.all([
      queryClient.prefetchInfiniteQuery({
        queryKey: ["products", {}],
        queryFn: ({ pageParam }) => fetchProducts({}, pageParam),
        initialPageParam: null,
      }),
      queryClient.prefetchQuery({
        queryKey: ["product-filters"],
        queryFn: fetchProductFilters,
      }),
    ]);
  }

  if (isProductDetailsPage) {
    const productId = pathname.split("/products/")[1];
    await queryClient.prefetchQuery({
      queryKey: ["product", productId],
      queryFn: () => fetchProductById(productId),
    });
  }

  const dehydratedState = dehydrate(queryClient);

  const tree = (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <App></App>
        </StaticRouter>
      </QueryClientProvider>
    </StrictMode>
  );

  return { tree, dehydratedState };
}
