import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './ProfileEdit.module.css';
import gildong from '../../../assets/gildong.jpg';

const ProfileEdit = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: 'test@example.com',
      password: '******',
      name: '홍길동',
      nickname: '길동이',
      school: '가천대학교',
      major: '소프트웨어융합학과',
      stdId: 202334297,
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
        <img src={gildong} className={styles.profileBox} />
        <div className={styles.profileButtons}>
          <button className={styles.imageButton}>사진첨부</button>
          <button className={styles.imageButton}>사진삭제</button>
        </div>
      </div>

      {/* 폼 시작 */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <LabelWithInput label="이메일">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="이메일을 입력해주세요"
                className={styles.input}
              />
            )}
          />
        </LabelWithInput>
        <LabelWithInput label="비밀번호">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="비밀번호를 입력하세요"
                className={styles.input}
              />
            )}
          />
        </LabelWithInput>
        {/* 사용자명 */}
        <LabelWithInput label="이름">
          <Controller
            name="name"
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

        <LabelWithInput label="닉네임">
          <Controller
            name="nickname"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="닉네임을 입력해주세요"
                className={styles.input}
              />
            )}
          />
        </LabelWithInput>

        <LabelWithInput label="학번">
          <Controller
            name="stdId"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="학번을 입력하세요"
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

        {/* 저장 / 취소 버튼 */}
        <div className={styles.buttonGroup}>
          <button
            type="submit"
            onClick={() => navigate('/profile')}
            className={styles.button}
          >
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
