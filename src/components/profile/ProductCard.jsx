import styles from './ProductCard.module.css';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, title, showLikeButton, image, product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`, {
      state: { product },
    });
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.imageArea}>
        <img
          src={require(`../../assets/${image}`)}
          alt={title}
          className={styles.image}
        />
        {showLikeButton && (
          <div className={styles.likeIcon}>
            <FaHeart color="#3dd598" />
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
