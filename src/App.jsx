// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderLayout from "./components/share/HeaderLayout";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import MainPage from "./components/MainPage";
import NoticePage from "./components/NoticePage";
import NoticeDetailPage from "./components/NoticeDetailPage";
import NoticeFormPage from "./components/NoticeFormPage";
import ChatPage from "./components/ChatPage";
import ReviewPage from "./components/ReviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인/회원가입은 헤더 제외 */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* HeaderLayout 안에 들어가는 페이지들 */}
        <Route element={<HeaderLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/notices" element={<NoticePage />} />
          <Route path="/notices/:id" element={<NoticeDetailPage />} />
          <Route path="/notices/:id/edit" element={<NoticeFormPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/review/:id" element={<ReviewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// npm install \
//   react-router-dom \
//   axios \
//   react-datepicker \
//   react-icons \
//   date-fns

// install Node.js
