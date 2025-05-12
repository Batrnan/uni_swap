import { Link } from 'react-router-dom';

const ProfileActionItem = ({ icon, label, href }) => {
  return (
    <Link
      to={href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        textDecoration: 'none', // 언더라인 제거
        color: 'inherit', // 현재 부모 요소의 색상 유지
      }}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default ProfileActionItem;
