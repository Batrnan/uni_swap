import { useState } from 'react';
import ProductLayout from '../../../components/profile/ProductLayout';
import ReviewItem from '../../../components/profile/ReviewItem';
import styles from './MyReview.module.css';
import ReviewCheckItem from '../../../components/profile/ReviewCheckItem';
import ReviewList from '../../../components/profile/ReviewList';
import { checkReviews, writeReviews } from '../../../data/reviewProducts';

const MyReview = () => {
  const [activeTab, setActiveTab] = useState('write');

  return (
    <ProductLayout title="나의 리뷰">
      <div className={styles.menu}>
        <div
          className={`${styles.tab} ${
            activeTab === 'write' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('write')}
        >
          리뷰 쓰기
          {activeTab === 'write' && <div className={styles.underline} />}
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === 'check' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('check')}
        >
          리뷰 확인
          {activeTab === 'check' && <div className={styles.underline} />}
        </div>
      </div>
      <ReviewList>
        {activeTab === 'write'
          ? writeReviews.map((product) => (
              <ReviewItem
                key={product.id}
                {...product}
                product={product}
                write
              />
            ))
          : checkReviews.map((product) => (
              <ReviewCheckItem
                key={product.id}
                {...product}
                product={product}
              />
            ))}
      </ReviewList>
    </ProductLayout>
  );
};

export default MyReview;
