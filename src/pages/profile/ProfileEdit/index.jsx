import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ProfileEdit.css';

const ProfileEdit = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      school: '',
      major: '',
      birth: null,
      phone: '',
      kakao: '',
    },
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('입력된 정보:', data);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={titleStyle}>프로필 설정</h1>
      <div style={{ width: '400px', margin: '0 auto' }}>
        {/* 프로필 이미지 영역 */}
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-end' }}>
          <div style={profileBoxStyle} />
          <div style={{ display: 'flex', gap: '20px' }}>
            <button style={imageButtonStyle}>사진첨부</button>
            <button style={imageButtonStyle}>사진삭제</button>
          </div>
        </div>

        {/* 폼 시작 */}
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
          {/* 사용자명 */}
          <LabelWithInput label="사용자명">
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="사용자명을 입력해주세요"
                  style={inputStyle}
                />
              )}
            />
          </LabelWithInput>

          {/* 학교 - select */}
          <LabelWithInput label="학교">
            <Controller
              name="school"
              control={control}
              render={({ field }) => (
                <select {...field} style={inputStyle}>
                  <option value="">학교를 선택하세요</option>
                  <option value="서울대학교">서울대학교</option>
                  <option value="연세대학교">연세대학교</option>
                  <option value="고려대학교">고려대학교</option>
                  <option value="고려대학교">가천대학교</option>
                </select>
              )}
            />
          </LabelWithInput>

          {/* 학과 - select */}
          <LabelWithInput label="학과">
            <Controller
              name="major"
              control={control}
              render={({ field }) => (
                <select {...field} style={inputStyle}>
                  <option value="">학과를 선택하세요</option>
                  <option value="컴퓨터공학과">컴퓨터공학과</option>
                  <option value="전자공학과">전자공학과</option>
                  <option value="경영학과">경영학과</option>
                </select>
              )}
            />
          </LabelWithInput>

          {/* 생년월일 - DatePicker */}
          <LabelWithInput label="생년월일">
            <Controller
              name="birth"
              control={control}
              render={({ field }) => (
                <DatePicker
                  placeholderText="생년월일을 선택하세요"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  dateFormat="yyyy-MM-dd"
                  maxDate={new Date()}
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={100}
                  className="custom-datepicker-input"
                />
              )}
            />
          </LabelWithInput>

          {/* 전화번호 */}
          <LabelWithInput label="전화번호">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="전화번호를 입력하세요"
                  style={inputStyle}
                />
              )}
            />
          </LabelWithInput>

          {/* 카카오톡 ID */}
          <LabelWithInput label="카카오톡 ID">
            <Controller
              name="kakao"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="카카오톡 ID를 입력하세요"
                  style={inputStyle}
                />
              )}
            />
          </LabelWithInput>

          {/* 저장 / 취소 버튼 */}
          <div style={buttonGroupStyle}>
            <button type="submit" style={buttonStyle}>
              저장
            </button>
            <button
              type="button"
              onClick={() => navigate('/profile')}
              style={buttonStyle}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const LabelWithInput = ({ label, children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
    <h1 style={{ width: '88px' }}>{label}</h1>
    {children}
  </div>
);

/* === 스타일 === */
const titleStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '40px',
  marginTop: '40px',
};

const profileBoxStyle = {
  width: '120px',
  height: '120px',
  backgroundColor: '#ccc',
  border: '1px solid #aaa',
};

const imageButtonStyle = {
  width: '80px',
  height: '32px',
  cursor: 'pointer',
  color: '#fff',
  backgroundColor: '#55C9A6',
  border: 'none',
  borderRadius: '5px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginTop: '40px',
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #55C9A6',
  borderRadius: '10px',
  width: '320px',
};

const buttonStyle = {
  width: '60px',
  height: '32px',
  color: '#fff',
  backgroundColor: '#55C9A6',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const buttonGroupStyle = {
  marginTop: '20px',
  width: '100%',
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
};

export default ProfileEdit;
