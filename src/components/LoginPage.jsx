// src/components/LoginPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import logo from "../assets/UNI_SWAP_Logo.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 백엔드 연동 로직 추가 후 검증하기
    navigate("/main");
  };

  return (
    <div className="login-container">
      <Link to="/">
        <img src={logo} alt="UNI_SWAP Logo" className="login-logo" />
      </Link>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="아이디(이메일)을 입력하세요."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />

        <input
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <button type="submit" className="login-button">
          로그인
        </button>

        <p className="login-signup-text">
          처음이신가요? <Link to="/signup">회원가입하기</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
