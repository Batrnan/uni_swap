import { useState } from 'react';
import UserProfile from '../../../components/share/UserProfile';
import styles from './PublicProfile.module.css';
import ProductList from '../../../components/profile/ProductList';
import ReviewCheckItem from '../../../components/profile/ReviewCheckItem';
import ReviewList from '../../../components/profile/ReviewList';
import { publicProducts } from '../../../data/publicProducts';
import { useLocation } from 'react-router-dom';

const PublicProfile = () => {
  const location = useLocation();
  const product = location.state?.product;
  const [activeTab, setActiveTab] = useState('sell'); // 'sell' 또는 'review'
  console.log(product);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>프로필</h1>
      <div className={styles.profileSection}>
        <UserProfile
          profileImageUrl={
            product.profileImageUrl
              ? product.profileImageUrl
              : 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png'
          }
          nickname={product.userName}
          major={product.major}
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
        <ProductList>{publicProducts}</ProductList>
      ) : (
        <ReviewList>
          {publicProducts.map((product) => (
            <ReviewCheckItem
              key={product.id}
              {...product}
              product={product}
              received
            />
          ))}
        </ReviewList>
      )}
    </div>
  );
};

export default PublicProfile;
