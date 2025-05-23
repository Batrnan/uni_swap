import styles from './ReviewItem.module.css';
import StarRating from './StarRating';
import KebabDropdown from './KebabDropdown';
import clsx from 'clsx';

const ReviewCheckItem = ({ title, desc, rate = 0, received }) => {
  return (
    <div className={clsx(styles.container, received && styles.fullBorder)}>
      <div className={styles.thumb} />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>
          <StarRating rate={rate} />
        </div>
        <div className={styles.desc}>{desc}</div>
      </div>
      {!received && <KebabDropdown />}
    </div>
  );
};

export default ReviewCheckItem;
