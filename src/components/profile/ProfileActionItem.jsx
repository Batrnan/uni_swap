export default function ProfileActionItem({ icon, label }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
      }}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
