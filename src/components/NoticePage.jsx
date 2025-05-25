// src/components/NoticePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./NoticePage.css";

const notices = [
  { id: 1, title: "거래 사기 방지 팁 및 피해 신고 관련", date: "2025.05.02" },
  { id: 2, title: "새 학기 교재 할인 이벤트 안내", date: "2025.04.28" },
  { id: 3, title: "서버 점검 안내", date: "2025.04.20" },
];

const NoticePage = () => (
  <div className="notice-container">
    {/* ① 페이지 제목 */}
    <h2 className="notice-header">공지사항</h2>

    {/* ② 리스트 테이블 */}
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
