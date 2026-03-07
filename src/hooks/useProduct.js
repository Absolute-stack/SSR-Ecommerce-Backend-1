import {
  fetchProductById,
  fetchProductFilters,
  fetchProducts,
} from "../api/products.js";
import {
  useQuery,
  useInfiniteQuery,
  keepPreviousData,
} from "@tanstack/react-query";

export function useProducts(filters = {}) {
  return useInfiniteQuery({
    queryKey: ["products", filters],
    queryFn: ({ pageParam }) => fetchProducts(filters, pageParam),
    staleTime: 60 * 1000,
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    placeholderData: keepPreviousData,
  });
}

export function useProductFilters() {
  return useQuery({
    queryKey: ["product-filters"],
    queryFn: fetchProductFilters,
  });
}

export function useProduct(id) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
}

export function useRelatedProducts(category, currentId) {
  return useInfiniteQuery({
    queryKey: ["products", { category }],
    queryFn: ({ pageParam }) => fetchProducts({ category }, pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    enabled: !!category,
    select: (data) => ({
      ...data,
      pages: data.pages.map((page) => ({
        ...page,
        products: page.products.filter((p) => p._id !== currentId),
      })),
    }),
  });
}
