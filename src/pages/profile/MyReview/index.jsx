import { useState } from 'react';
import ProductLayout from '../../../components/profile/ProductLayout';
import ReviewItem from '../../../components/profile/ReviewItem';
import styles from './MyReview.module.css';
import ReviewCheckItem from '../../../components/profile/ReviewCheckItem';
import ReviewList from '../../../components/profile/ReviewList';
import { products } from '../../../data/products';

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
        {products.map((product) =>
          activeTab === 'write' ? (
            <ReviewItem
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              desc={product.desc}
              image={product.image}
              write
            />
          ) : (
            <ReviewCheckItem
              id={product.id}
              key={product.id}
              title={product.title}
              desc={product.desc}
              rate={product.rate}
              image={product.image}
            />
          )
        )}
      </ReviewList>
    </ProductLayout>
  );
};

export default MyReview;
