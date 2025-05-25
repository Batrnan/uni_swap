// src/components/SignupPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.css";
import logo from "../assets/UNI_SWAP_Logo.png";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [studentId, setStudentId] = useState("");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 모두 입력되었는지 검증
    if (
      !email.trim() ||
      !password ||
      !name.trim() ||
      !nickname.trim() ||
      !studentId.trim() ||
      !school.trim() ||
      !major.trim()
    ) {
      setErrorMsg("필수 입력란을 모두 채워주세요.");
      return;
    }

    // (선택) 중복 이메일 테스트
    if (email === "error@example.com") {
      setErrorMsg("이미 사용 중인 이메일입니다.");
      return;
    }

    // 통과했으면 에러 초기화 후 로그인 페이지로
    setErrorMsg("");
    navigate("/");
  };

  return (
    <div className="signup-container">
      <Link to="/">
        <img src={logo} alt="UNI_SWAP Logo" className="signup-logo" />
      </Link>

      <h2 className="signup-tagline">대학교 내 중고거래를 한 곳에서!</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />

        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup-input"
        />

        <input
          type="text"
          placeholder="별명"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="signup-input"
        />

        <input
          type="text"
          placeholder="학번"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="signup-input"
        />

        <input
          type="text"
          placeholder="학교"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="signup-input"
        />

        <input
          type="text"
          placeholder="학과"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          className="signup-input"
        />

        {errorMsg && <div className="signup-error">{errorMsg}</div>}

        <button type="submit" className="signup-button">
          회원가입하기
        </button>
      </form>

      <p className="back-login">
        이미 계정이 있으신가요?{" "}
        <Link to="/" className="back-login-link">
          로그인으로 돌아가기
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
