import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart.js";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizes, setShowSizes] = useState(false);

  const { cartItems, addItem } = useCart();

  // Check if this exact product + size combo is already in cart
  const inCart = cartItems.find(
    (item) => item._id === product._id && item.selectedSize === selectedSize,
  );

  function handleAddToCart() {
    if (!selectedSize) {
      // Prompt user to pick a size first
      setShowSizes(true);
      return;
    }

    addItem(product, selectedSize);
    setShowSizes(false);
  }

  return (
    <div className={styles.card}>
      {/* Image — links to product detail page */}
      <Link to={`/products/${product._id}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <img
            src={product.images[0]}
            alt={product.name}
            className={styles.image}
            loading="lazy"
          />

          {/* Low stock warning badge */}
          {product.stock <= 5 && product.stock > 0 && (
            <span className={styles.lowStock}>Only {product.stock} left</span>
          )}
        </div>
      </Link>

      <div className={styles.info}>
        <Link to={`/products/${product._id}`} className={styles.nameLink}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>

      {/* Size selector — appears when user tries to add without selecting */}
      {showSizes && (
        <div className={styles.sizes}>
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`${styles.sizeBtn} ${
                selectedSize === size ? styles.selected : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={handleAddToCart}
        className={`${styles.addBtn} ${inCart ? styles.inCart : ""}`}
      >
        {inCart
          ? `In Cart (${inCart.quantity})`
          : selectedSize
            ? `Add Size ${selectedSize}`
            : "Select Size"}
      </button>
    </div>
  );
}
