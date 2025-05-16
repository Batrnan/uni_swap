import styles from './ReviewItem.module.css';

const ReviewItem = ({ title, price, desc, write = false }) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumb} />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{price}</div>
        <div className={styles.desc}>{desc}</div>
      </div>
      <div className={styles.arrow}>{'>'}</div>
      {write && <button className={styles.write}>리뷰 쓰기</button>}
    </div>
  );
};

export default ReviewItem;
