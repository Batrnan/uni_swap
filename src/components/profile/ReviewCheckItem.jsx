import styles from './ReviewItem.module.css';
import StarRating from './StarRating';
import KebabDropdown from './KebabDropdown';
import clsx from 'clsx';

const ReviewCheckItem = ({
  id,
  title,
  desc,
  rate = 0,
  image,
  product,
  received,
}) => {
  return (
    <div className={clsx(styles.container, received && styles.fullBorder)}>
      <img
        src={require(`../../assets/${image}`)}
        alt={title}
        className={styles.thumb}
      />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>
          <StarRating rate={rate} />
        </div>
        <div className={styles.desc}>{desc}</div>
      </div>
      {!received && <KebabDropdown id={id} product={product} />}
    </div>
  );
};

export default ReviewCheckItem;
