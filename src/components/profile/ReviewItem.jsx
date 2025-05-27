import styles from './ReviewItem.module.css';
import { useNavigate } from 'react-router-dom';

const ReviewItem = ({
  id,
  title,
  price,
  desc,
  image,
  product,
  write = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  const handleReviewWrite = () => {
    navigate(`/review/${id}`);
  };
  return (
    <div className={styles.container}>
      <img
        src={require(`../../assets/${image}`)}
        alt={title}
        className={styles.thumb}
      />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{price}원</div>
        <div className={styles.desc}>{desc}</div>
      </div>
      <div className={styles.arrow} onClick={handleClick}>
        {'>'}
      </div>
      {write && (
        <button className={styles.write} onClick={handleReviewWrite}>
          리뷰 쓰기
        </button>
      )}
    </div>
  );
};

export default ReviewItem;
