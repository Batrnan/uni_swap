// src/components/NoticeFormPage.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./NoticeFormPage.css";

const notices = [
  // 수정 모드용 더미 (실제 API 호출로 대체하세요)
  {
    id: "1",
    title: "서버 점검 안내",
    date: "2025-04-20",
    content: "점검합니다.",
  },
  {
    id: "2",
    title: "할인 이벤트 안내",
    date: "2025-04-28",
    content: "할인해요.",
  },
];

const NoticeFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editNotice = id && notices.find((n) => n.id === id);

  const [title, setTitle] = useState(editNotice?.title || "");
  const [date, setDate] = useState(editNotice?.date || "");
  const [file, setFile] = useState(null);
  const [content, setContent] = useState(editNotice?.content || "");

  useEffect(() => {
    if (editNotice) {
      setTitle(editNotice.title);
      setDate(editNotice.date);
      setContent(editNotice.content);
    }
  }, [editNotice]);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // TODO: PUT /api/notices/:id
      console.log("수정:", { id, title, date, file, content });
    } else {
      // TODO: POST /api/notices
      console.log("등록:", { title, date, file, content });
    }
    navigate("/notices");
  };

  return (
    <div className="notice-edit-container">
      {/* 페이지 제목만 남깁니다 */}
      <h2 className="edit-title">{id ? "공지사항 수정" : "공지사항 작성"}</h2>

      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="notice-title">제목</label>
          <input
            id="notice-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요."
            className="edit-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="notice-date">등록날짜</label>
          <input
            id="notice-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="edit-input"
          />
        </div>

        <div className="form-group">
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input"
          />
          <label htmlFor="file-upload" className="attach-button">
            이미지 첨부
          </label>
        </div>

        <div className="form-group">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 작성하세요."
            className="edit-textarea"
          />
        </div>

        <button type="submit" className="edit-submit-button">
          {id ? "수정 완료" : "공지사항 등록"}
        </button>
      </form>
    </div>
  );
};

export default NoticeFormPage;
