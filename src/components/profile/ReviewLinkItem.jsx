import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ReviewLinkItem = ({ label, href }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
      }}
    >
      <span
        style={{
          fontSize: '20px',
        }}
      >
        {label}
      </span>
      <Link
        to={href}
        style={{
          textDecoration: 'none', // 언더라인 제거
          color: 'inherit', // 현재 부모 요소의 색상 유지
        }}
      >
        <IoIosArrowForward size={30} color="white" />
      </Link>
    </div>
  );
};

export default ReviewLinkItem;
