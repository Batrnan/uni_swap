import { IoSettingsOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import styles from './UserProfile.module.css';

const UserProfile = ({ profileImageUrl, nickname, major }) => {
  const location = useLocation();

  // 현재 URL이 '/public-profile'이면 settings 아이콘을 숨깁니다.
  const isPublicProfile = location.pathname === '/public-profile';

  return (
    <div className={styles.container}>
      <div className={styles.profileInfo}>
        <div
          className={styles.profileImage}
          style={{
            backgroundImage: `url(${profileImageUrl})`,
          }}
        />
        <div>
          <h1 className={styles.nickname}>{nickname}</h1>
          <p className={styles.major}>{major}</p>
        </div>
      </div>
      {!isPublicProfile && (
        <Link to="/profile/edit" className={styles.settingsLink}>
          <IoSettingsOutline size={36} />
        </Link>
      )}
    </div>
  );
};

export default UserProfile;
