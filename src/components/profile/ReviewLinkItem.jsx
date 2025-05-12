import { FaArrowAltCircleRight } from 'react-icons/fa';

const ReviewLinkItem = ({ label }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
      }}
    >
      <span>{label}</span>
      <FaArrowAltCircleRight size={30} />
    </div>
  );
};

export default ReviewLinkItem;
