import { useState } from "react";
import { useProducts } from "../../hooks/useProduct.js";
import Filterbar from "../../components/Filterbar.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import styles from "./ProductsPage.module.css";

export default function ProductsPage() {
  const [filters, setFilters] = useState({});

  const {
    data,
    isPending,
    isError,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProducts(filters);

  if (isPending) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  if (isError) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  // Flatten all pages into one array
  const allProducts = data.pages.flatMap((page) => page.products);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Products</h1>
        {isFetching && !isFetchingNextPage && (
          <span className={styles.updating}>Updating...</span>
        )}
      </div>

      <Filterbar filters={filters} onChange={setFilters} />

      {/* Dim old results while new filter results are loading */}
      <div
        className={styles.grid}
        style={{ opacity: isFetching && !isFetchingNextPage ? 0.6 : 1 }}
      >
        {allProducts.length === 0 && !isFetching ? (
          <p className={styles.empty}>No products found for these filters</p>
        ) : (
          allProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>

      {/* Load More button */}
      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className={styles.loadMore}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}

      {/* End of results message */}
      {!hasNextPage && allProducts.length > 0 && (
        <p className={styles.end}>You have seen all products</p>
      )}
    </div>
  );
}
