import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SignupPage.css";
import logo from "../assets/UNI_SWAP_Logo.png";

const SignupPage = () => {
  const [school, setSchool] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [contact, setContact] = useState("");
  // → 에러 메시지용 state 추가
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 하나라도 비어 있으면
    if (!school.trim() || !name.trim() || !birthDate || !contact.trim()) {
      setErrorMsg("필수 입력란을 모두 채워주세요.");
      return;
    }
    // 모두 채워졌으면 에러 초기화 후 실제 처리
    setErrorMsg("");
    console.log({
      school,
      name,
      birth: birthDate.toISOString().slice(0, 10),
      contact,
    });
    // TODO: API 호출 등
  };

  return (
    <div className="signup-container">
      <form className="signup-card" onSubmit={handleSubmit}>
        {/* 로고를 클릭하면 "/" 로 이동 */}
        <Link to="/">
          <img src={logo} alt="UNI_SWAP Logo" className="signup-logo" />
        </Link>

        <h2 className="signup-tagline">대학교 내 중고거래를 한 곳에서!</h2>

        <input
          type="text"
          placeholder="학교명"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="signup-input"
        />

        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup-input"
        />

        {/* 버튼 크기 수정해야됨 */}
        <DatePicker
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="생년월일"
          className="signup-input"
          wrapperClassName="signup-input-wrapper"
        />

        <input
          type="text"
          placeholder="전화번호 or 카톡아이디"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="signup-input"
        />

        {/* 에러 메시지 */}
        {errorMsg && <div className="signup-error">{errorMsg}</div>}

        <button type="submit" className="signup-button">
          회원가입하기
        </button>

        <p className="back-login">
          이미 계정이 있으신가요? <Link to="/">로그인으로 돌아가기</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
