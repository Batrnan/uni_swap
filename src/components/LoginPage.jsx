import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import logo from "../assets/UNI_SWAP_Logo.png";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <Link to="/">
          <img src={logo} alt="UNI_SWAP Logo" className="login-logo" />
        </Link>

        <input
          type="text"
          placeholder="아이디를 입력하세요."
          className="login-input"
        />

        <input
          type="password"
          placeholder="비밀번호를 입력하세요."
          className="login-input"
        />

        <p className="signup-text">
          처음이신가요? <a href="/signup">회원가입하기</a>
        </p>

        <button type="button" className="login-test-btn">
          <Link to="/main">테스트용 메인 페이지 이동</Link>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
