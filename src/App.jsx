import React from 'react';
import './App.css';
import ProfilePage from './pages/profile/ProfilePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import MainPage from './components/MainPage';
import NoticePage from './components/NoticePage';
import NoticeDetailPage from './components/NoticeDetailPage';
import ProfileEdit from './pages/profile/ProfileEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/notices" element={<NoticePage />} />
        <Route path="/notices/:id" element={<NoticeDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 초기 설정 필수!!!
// npm install react-router-dom
// npm install react-icons
// npm install react-datepicker date-fns
