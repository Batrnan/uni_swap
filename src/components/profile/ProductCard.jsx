import React from 'react';
import styles from './ProductCard.module.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductCard = ({ title, initialLike, showLikeButton }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageArea}>
        {showLikeButton && (
          <div className={styles.likeIcon}>
            {initialLike ? <FaHeart color="red" /> : <FaRegHeart />}
          </div>
        )}
      </div>
      <div className={styles.title} title={title}>
        {title}
      </div>
    </div>
  );
};

export default ProductCard;
