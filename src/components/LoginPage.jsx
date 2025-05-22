// src/components/LoginPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";
import logo from "../assets/UNI_SWAP_Logo.png";

const LoginPage = () => {
  const [username, setUsername] = useState(""); // 이 예제에선 email 을 username 변수로 씁니다
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password) {
      setErrorMsg("아이디(이메일)와 비밀번호를 모두 입력해주세요.");
      return;
    }
    setErrorMsg("");

    try {
      const res = await axios.post("/api/users/login", {
        email: username,
        password: password,
      });
      // 백엔드가 "로그인 성공" / "로그인 실패" 문자열을 반환한다고 가정
      if (res.status === 200 && res.data === "로그인 성공") {
        // 로그인 성공 시 메인 페이지로
        navigate("/main");
      } else {
        // 실패 메시지를 그대로 보여주거나, 고정 메시지로 대체
        setErrorMsg(res.data || "로그인에 실패했습니다.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("서버 요청 중 오류가 발생했습니다.");
    }
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

        {errorMsg && <div className="login-error">{errorMsg}</div>}

        <button type="submit" className="login-button">
          로그인
        </button>

        <p className="login-signup-text">
          처음이신가요? <Link to="/signup">회원가입하기</Link>
        </p>

        <button
          type="button"
          className="login-test-btn"
          onClick={() => navigate("/main")}
        >
          테스트용 메인 페이지 이동
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
