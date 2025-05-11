// src/components/NoticePage.js
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import "./NoticePage.css";
import logo from "../assets/UNI_SWAP_Logo.png";

const notices = [
  { id: 1, title: "거래 사기 방지 팁 및 피해 신고 관련", date: "2025.05.02" },
  { id: 2, title: "새 학기 교재 할인 이벤트 안내", date: "2025.04.28" },
  { id: 3, title: "서버 점검 안내", date: "2025.04.20" },
];

const NoticePage = () => (
  <div className="notice-container">
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

    <h2 className="notice-header">공지사항</h2>
    <table className="notice-table">
      <thead>
        <tr>
          <th>제목</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {notices.map((n) => (
          <tr key={n.id}>
            <td>
              {/* 여기를 Link로 감싸면 클릭 시 상세 페이지로 이동 */}
              <Link to={`/notices/${n.id}`} className="notice-link">
                {n.title}
              </Link>
            </td>
            <td>{n.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default NoticePage;
