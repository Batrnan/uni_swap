import sellImage from '../../../assets/sell.png';
import likeImage from '../../../assets/like.png';
import ReviewLinkItem from '../../../components/profile/ReviewLinkItem';
import ProfileActionItem from '../../../components/profile/ProfileActionItem';
import UserProfile from '../../../components/share/UserProfile';
import styles from './ProfilePage.module.css';
import profileImage from '../../../assets/gildong.jpg';

const MyProfile = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>프로필</h1>
      <div className={styles.profileSection}>
        <UserProfile
          profileImageUrl={profileImage}
          nickname="홍길동"
          major="가천대 소프트웨어융합학과"
        />
      </div>
      <div className={styles.actionSection}>
        <ProfileActionItem
          href={'/profile/mybuy'}
          icon={<img src={sellImage} alt="구매" style={{ width: '70px' }} />}
          label="구매한 상품"
        />
        <ProfileActionItem
          href={'/profile/myproduct'}
          icon={<img src={sellImage} alt="판매" style={{ width: '70px' }} />}
          label="나의 판매 상품"
        />
        <ProfileActionItem
          href={'/profile/mylike'}
          icon={<img src={likeImage} alt="찜" style={{ width: '70px' }} />}
          label="내가 찜한 상품"
        />
      </div>
      <div className={styles.reviewSection}>
        <h1 className={styles.reviewTitle}>리뷰</h1>
        <ReviewLinkItem label="내가 쓴 리뷰" href="/profile/myreview" />
        <ReviewLinkItem label="받은 리뷰" href="/profile/received-review" />
      </div>
    </div>
  );
};

export default MyProfile;
