// src/components/NoticeDetailPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import "./NoticeDetailPage.css";
import logo from "../assets/UNI_SWAP_Logo.png";

const notices = [
  {
    id: 1,
    title: "거래 사기 방지 팁 및 피해 신고 관련",
    date: "2025.05.02",
    content: "거래 사기 예방법 상세 내용...",
  },
  {
    id: 2,
    title: "새 학기 교재 할인 이벤트 안내",
    date: "2025.04.28",
    content: "할인 이벤트 관련 상세 내용...",
  },
  {
    id: 3,
    title: "서버 점검 안내",
    date: "2025.04.20",
    content: "서버 점검 일정 및 영향...",
  },
];

const NoticeDetailPage = () => {
  const { id } = useParams();
  const notice = notices.find((n) => n.id === parseInt(id, 10));

  if (!notice) {
    return (
      <div className="notice-detail-container">
        <p>해당 공지사항을 찾을 수 없습니다.</p>
        <Link to="/notices">목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className="notice-detail-container">
      <header className="notice-topbar">
        <Link to="/main">
          <img src={logo} alt="UNI_SWAP" className="notice-logo" />
        </Link>
        <div className="notice-header-icons">
          <Link to="/main">
            <FaHome className="icon" />
          </Link>
          <Link to="/profile">
            <FaUser className="icon" />
          </Link>
        </div>
      </header>

      <h2 className="notice-detail-title">{notice.title}</h2>
      <p className="notice-detail-date">{notice.date}</p>
      <hr />

      <div className="notice-detail-content">
        {/* 사진이나 텍스트 콘텐츠가 있다면 여기에 */}
        <div className="notice-placeholder">
          공지사항 이미지 또는 본문 첨부 영역
        </div>
        <p>{notice.content}</p>
      </div>

      <Link to="/notices" className="back-link">
        &larr; 공지사항 목록으로
      </Link>
    </div>
  );
};

export default NoticeDetailPage;
