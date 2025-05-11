import sellImage from '/assets/sell.png';
import likeImage from '/assets/like.png';
import { IoMdSettings } from 'react-icons/io';
import ReviewLinkItem from '../../components/profile/ReviewLinkItem';
import ProfileActionItem from '../../components/profile/ProfileActionItem';
import UserProfile from '../../components/share/UserProfile';

export default function ProfilePage() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: '30px',
          textAlign: 'center',
          margin: '30px',
        }}
      >
        프로필
      </h1>
      <UserProfile
        profileImageUrl="/assets/carrot.png"
        nickname="당근"
        major="가천대 소프트웨어전공"
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '50px',
          fontSize: '15px',
          borderBottom: '1px solid #ccc',
          paddingBottom: '30px',
        }}
      >
        <ProfileActionItem
          icon={<img src={sellImage} alt="판매" style={{ width: '70px' }} />}
          label="나의 판매 상품"
        />
        <ProfileActionItem
          icon={<img src={likeImage} alt="찜" style={{ width: '70px' }} />}
          label="내가 찜한 상품"
        />
        <ProfileActionItem
          icon={<IoMdSettings size={70} />}
          label="프로필 수정"
        />
      </div>
      <div
        style={{
          padding: '30px 60px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h1 style={{ fontWeight: 'bold', fontSize: '30px' }}>리뷰</h1>
        <ReviewLinkItem label="내가 쓴 리뷰" />
        <ReviewLinkItem label="받은 리뷰" />
      </div>
    </div>
  );
}
