// src/components/NoticeDetailPage.js
import React, { useState, useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaEllipsisH } from "react-icons/fa";
import cheatImg from "../assets/Cheat.jpg"; // <-- 추가된 이미지 import
import "./NoticeDetailPage.css";

const notices = [
  {
    id: 1,
    title: "거래 사기 방지 팁 및 피해 신고 관련",
    date: "2025.05.02",
    content: "거래 사기 예방법 상세 내용…",
  },
  {
    id: 2,
    title: "새 학기 교재 할인 이벤트 안내",
    date: "2025.04.28",
    content: "할인 이벤트 관련 상세 내용…",
  },
  {
    id: 3,
    title: "서버 점검 안내",
    date: "2025.04.20",
    content: "서버 점검 일정 및 영향…",
  },
];

const NoticeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notice = notices.find((n) => n.id === parseInt(id, 10));
  const isAdmin = true; // 실제로는 로그인 체크

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!notice) {
    return (
      <div className="notice-detail-container">
        <p>해당 공지사항을 찾을 수 없습니다.</p>
        <Link to="/notices">← 공지사항 목록으로</Link>
      </div>
    );
  }

  return (
    <div className="notice-detail-container">
      {/* 제목 + 관리자 메뉴 */}
      <div className="notice-detail-header">
        <h2 className="notice-detail-title">{notice.title}</h2>
        {isAdmin && (
          <div className="notice-detail-controls" ref={menuRef}>
            <button
              className="ellipsis-btn"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <FaEllipsisH />
            </button>
            {menuOpen && (
              <ul className="ellipsis-menu">
                <li>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate(`/notices/${id}/edit`);
                    }}
                  >
                    공지사항 수정
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      if (window.confirm("정말 삭제하시겠습니까?")) {
                        // TODO: DELETE API 호출
                        navigate("/notices");
                      }
                    }}
                  >
                    공지사항 삭제
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>

      {/* 날짜 */}
      <p className="notice-detail-date">{notice.date}</p>
      <hr />

      {/* ★ 이미지 삽입 ★ */}
      {notice.id === 1 && (
        <div className="notice-detail-image">
          <img src={cheatImg} alt={notice.title} />
        </div>
      )}

      {/* 본문 */}
      <div className="notice-detail-content">
        <p>{notice.content}</p>
      </div>

      {/* 뒤로가기 */}
      <Link to="/notices" className="back-link">
        ← 공지사항 목록으로
      </Link>
    </div>
  );
};

export default NoticeDetailPage;
