import { useState } from 'react';
import ProductLayout from '../../../components/profile/ProductLayout';
import ReviewItem from '../../../components/profile/ReviewItem';
import styles from './MyReview.module.css';
import ReviewCheckItem from '../../../components/profile/ReviewCheckItem';
import ReviewList from '../../../components/profile/ReviewList';

const dummyData = [
  {
    id: 1,
    title: '확률과 통계 교재 판매합니다다다다다다다',
    like: true,
    price: '150,000,000',
    desc: '필기 안되어 있고 깨끗합니다.',
    rate: 3,
  },
  {
    id: 2,
    title: '확률과 통계 교재 판매합니다',
    like: true,
    price: '70,000',
    desc: '필기다.',
    rate: 2,
  },
  {
    id: 3,
    title: '토익 교재 싸게 팔아요',
    like: true,
    price: '20,000',
    desc: '안되어 있고 깨끗합니다.',
    rate: 3,
  },
  {
    id: 4,
    title: '자료구조와 알고리즘 교재',
    like: true,
    price: '3,000',
    desc: '필기 안되어 있고 깨끗합니다.',
    rate: 4,
  },
  {
    id: 5,
    title: '자료구조와 알고리즘 교재',
    like: true,
    price: '4,000,000',
    desc: '필기 안되어 있고 깨끗합니다.',
    rate: 3,
  },
  {
    id: 6,
    title: '자료구조와 알고리즘 교재',
    like: true,
    price: '100,000',
    desc: '필기 안되어 있고 깨끗합니다.',
  },
  {
    id: 7,
    title: '자료구조와 알고리즘 교재',
    like: true,
    price: '150,000,000',
    desc: '필기 안되어 있고 깨끗합니다.',
  },
  {
    id: 8,
    title: '자료구조와 알고리즘 교재',
    like: true,
    price: '150,000,000',
    desc: '필기 안되어 있고 깨끗합니다.',
  },
];

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
        {dummyData.map((product) =>
          activeTab === 'write' ? (
            <ReviewItem
              key={product.id}
              title={product.title}
              price={product.price}
              desc={product.desc}
              write
            />
          ) : (
            <ReviewCheckItem
              key={product.id}
              title={product.title}
              desc={product.desc}
              rate={product.rate}
            />
          )
        )}
      </ReviewList>
    </ProductLayout>
  );
};

export default MyReview;
