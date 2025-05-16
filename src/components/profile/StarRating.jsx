import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

function StarRating({ rate }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      {[1, 2, 3, 4, 5].map((num) =>
        num <= rate ? (
          <IoIosStar color="#55c9a6" />
        ) : (
          <IoIosStarOutline color="#b0b0b0" />
        )
      )}
    </div>
  );
}

export default StarRating;
