const ReviewList = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        marginTop: '36px',
      }}
    >
      {children}
    </div>
  );
};

export default ReviewList;
