import { useState } from 'react';
import UserProfile from '../../../components/share/UserProfile';
import styles from './PublicProfile.module.css';
import ProductList from '../../../components/profile/ProductList';
import ReviewCheckItem from '../../../components/profile/ReviewCheckItem';
import ReviewList from '../../../components/profile/ReviewList';

const PublicProfile = () => {
  const [activeTab, setActiveTab] = useState('sell'); // 'sell' 또는 'review'

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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>프로필</h1>
      <div className={styles.profileSection}>
        <UserProfile
          profileImageUrl="/assets/carrot.png"
          nickname="당근"
          major="가천대 소프트웨어전공"
        />
      </div>
      <div className={styles.menu}>
        <div
          className={`${styles.tab} ${
            activeTab === 'sell' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('sell')}
        >
          판매상품
          {activeTab === 'sell' && <div className={styles.underline} />}
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === 'review' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('review')}
        >
          리뷰
          {activeTab === 'review' && <div className={styles.underline} />}
        </div>
      </div>
      {activeTab === 'sell' ? (
        <ProductList>{dummyData}</ProductList>
      ) : (
        <ReviewList>
          {dummyData.map((product) => (
            <ReviewCheckItem
              key={product.id}
              title={product.title}
              desc={product.desc}
              rate={product.rate}
              received
            />
          ))}
        </ReviewList>
      )}
    </div>
  );
};

export default PublicProfile;
