import React, { useState } from 'react';
import styles from './ComplainForm.module.css';

const reportReasons = [
  '스팸/광고',
  '욕설/비방',
  '사기/사기 의심',
  '음란물',
  '불법 정보',
  '개인정보유출',
  '기타',
];

const ReportForm = () => {
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  const handleSubmit = () => {
    if (!selectedReason) {
      alert('신고 사유를 선택해주세요.');
      return;
    }

    const reportData =
      selectedReason === '기타'
        ? `신고 사유: 기타 (${customReason})`
        : `신고 사유: ${selectedReason}`;

    console.log(reportData);
    alert('신고가 접수되었습니다.');
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>신고하기</div>

      <div className={styles.radioGrid}>
        {reportReasons.map((reason, index) => (
          <label key={index} className={styles.radioItem}>
            <input
              type="radio"
              name="reportReason"
              value={reason}
              checked={selectedReason === reason}
              onChange={() => setSelectedReason(reason)}
            />
            {reason}
          </label>
        ))}
      </div>

      <textarea
        className={styles.textarea}
        placeholder="기타 신고사유를 작성해주세요."
        value={customReason}
        onChange={(e) => setCustomReason(e.target.value)}
        disabled={selectedReason !== '기타'}
      />

      {/* ✅ 신고하기 버튼 */}
      <button className={styles.submitButton} onClick={handleSubmit}>
        신고하기
      </button>
    </div>
  );
};

export default ReportForm;
