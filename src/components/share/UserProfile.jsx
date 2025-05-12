const UserProfile = ({ profileImageUrl, nickname, major }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: 70,
          height: 70,
          borderRadius: '50%',
          border: '1px solid black',
          backgroundColor: '#fff',
          backgroundImage: `url(${profileImageUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <div>
        <h1
          style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}
        >
          {nickname}
        </h1>
        <p style={{ fontSize: '14px' }}>{major}</p>
      </div>
    </div>
  );
};

export default UserProfile;
