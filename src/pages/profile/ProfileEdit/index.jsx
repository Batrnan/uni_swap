import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './ProfileEdit.module.css';

const ProfileEdit = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '홍길동',
      school: '가천대학교',
      major: '소프트웨어융합학과',
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
    <div className={styles.container}>
      <h1 className={styles.title}>프로필 설정</h1>
      {/* 프로필 이미지 영역 */}
      <div className={styles.profileRow}>
        <div className={styles.profileBox} />
        <div className={styles.profileButtons}>
          <button className={styles.imageButton}>사진첨부</button>
          <button className={styles.imageButton}>사진삭제</button>
        </div>
      </div>

      {/* 폼 시작 */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* 사용자명 */}
        <LabelWithInput label="사용자명">
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="사용자명을 입력해주세요"
                className={styles.input}
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
              <select {...field} className={styles.select}>
                <option value="">학교를 선택하세요</option>
                <option value="서울대학교">서울대학교</option>
                <option value="연세대학교">연세대학교</option>
                <option value="고려대학교">고려대학교</option>
                <option value="가천대학교">가천대학교</option>
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
              <select {...field} className={styles.select}>
                <option value="">학과를 선택하세요</option>
                <option value="컴퓨터공학과">컴퓨터공학과</option>
                <option value="전자공학과">전자공학과</option>
                <option value="경영학과">경영학과</option>
                <option value="소프트웨어융합학과">소프트웨어융합학과</option>
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
                withPortal
                placeholderText="생년월일을 선택하세요"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                dateFormat="yyyy-MM-dd"
                maxDate={new Date()}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                className={styles.datepickerInput}
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
                className={styles.input}
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
                className={styles.input}
              />
            )}
          />
        </LabelWithInput>

        {/* 저장 / 취소 버튼 */}
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.button}>
            저장
          </button>
          <button
            type="button"
            onClick={() => navigate('/profile')}
            className={styles.button}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

const LabelWithInput = ({ label, children }) => (
  <div className={styles.labelRow}>
    <h1 className={styles.labelTitle}>{label}</h1>
    {children}
  </div>
);

export default ProfileEdit;
