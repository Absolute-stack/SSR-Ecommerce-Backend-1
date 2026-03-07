import { useState, useEffect, useRef } from "react";
import { useProductFilters } from "../hooks/useProduct.js";
import styles from "./FilterBar.module.css";

export default function Filterbar({ filters = {}, onChange }) {
  const { data, isPending } = useProductFilters();
  const [searchInput, setSearchInput] = useState(filters.search || "");
  const isFirstRender = useRef(true);

  // Debounce search — wait 500ms after user stops typing
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      onChange({ ...filters, search: searchInput || undefined });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  // Sync local search state if parent resets filters
  useEffect(() => {
    if (!filters.search) {
      setSearchInput("");
    }
  }, [filters.search]);

  function handleCategory(e) {
    onChange({ ...filters, category: e.target.value || undefined });
  }

  function handleMinPrice(e) {
    onChange({ ...filters, minPrice: e.target.value || undefined });
  }

  function handleMaxPrice(e) {
    onChange({ ...filters, maxPrice: e.target.value || undefined });
  }

  function handleReset() {
    setSearchInput("");
    onChange({});
  }

  if (isPending) {
    return <div>Loading filters...</div>;
  }

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        placeholder="Search products..."
        className={styles.search}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <select
        value={filters.category || ""}
        onChange={handleCategory}
        className={styles.select}
      >
        <option value="">All Categories</option>
        {data.categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder={`Min $${data.minPrice}`}
        value={filters.minPrice || ""}
        onChange={handleMinPrice}
        className={styles.priceInput}
      />

      <span>—</span>

      <input
        type="number"
        placeholder={`Max $${data.maxPrice}`}
        value={filters.maxPrice || ""}
        onChange={handleMaxPrice}
        className={styles.priceInput}
      />

      <button type="button" onClick={handleReset} className={styles.resetBtn}>
        Reset
      </button>
    </div>
  );
}
