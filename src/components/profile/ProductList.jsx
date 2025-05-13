import React from 'react';
import styles from './ProductList.module.css';
import ProductCard from './ProductCard';

const ProductList = ({ title, children: products, showLikeButton }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            initialLike={product.like}
            showLikeButton={showLikeButton}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
