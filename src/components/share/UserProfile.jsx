export default function UserProfile({ profileImageUrl, nickname, major }) {
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
          width: 60,
          height: 60,
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
        <h1 style={{ fontWeight: '800', marginBottom: '5px' }}>{nickname}</h1>
        <p style={{ fontSize: '14px' }}>{major}</p>
      </div>
    </div>
  );
}
