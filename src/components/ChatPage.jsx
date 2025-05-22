// src/components/ChatPage.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaComments, FaEllipsisV } from "react-icons/fa";
import "./ChatPage.css";

const chats = [
  {
    id: "1",
    name: "당근",
    messages: [
      { fromMe: false, text: "거래 가능한가요?" },
      { fromMe: true, text: "네, 직거래만 가능합니다." },
    ],
  },
  { id: "2", name: "당근", messages: [] },
  { id: "3", name: "당근", messages: [] },
];

const ChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selected = chats.find((c) => c.id === id);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-wrapper">
        {/* ── 좌측 채팅 목록 ── */}
        <aside className="chat-list">
          <div className="chat-list-header">채팅</div>
          {chats.map((c) => (
            <Link
              to={`/chat/${c.id}`}
              key={c.id}
              className={`chat-item ${c.id === id ? "active" : ""}`}
            >
              <div className="avatar" />
              <div className="chat-info">
                <div className="chat-name">{c.name}</div>
                <div className="chat-last">
                  {c.messages.length
                    ? c.messages[c.messages.length - 1].text
                    : "거래 가능한가요?"}
                </div>
              </div>
            </Link>
          ))}
        </aside>

        {/* ── 우측 대화창 ── */}
        <main className="chat-window">
          {selected ? (
            <>
              <div className="chat-window-header">
                <div className="partner-info">
                  <div className="avatar" />
                  <span className="partner-name">{selected.name}</span>
                </div>

                <div className="chat-detail-controls" ref={menuRef}>
                  <button
                    className="ellipsis-btn"
                    onClick={() => setMenuOpen((o) => !o)}
                  >
                    <FaEllipsisV />
                  </button>
                  {menuOpen && (
                    <ul className="ellipsis-menu">
                      <li>
                        <button onClick={() => alert("차단 처리")}>
                          대화상대 차단
                        </button>
                      </li>
                      <li>
                        <button onClick={() => alert("신고 처리")}>
                          대화상대 신고
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setMenuOpen(false);
                            navigate(`/review/${id}`);
                          }}
                        >
                          거래 완료
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setMenuOpen(false);
                            navigate("/chat");
                          }}
                        >
                          나가기
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              <div className="chat-messages">
                {selected.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`message ${msg.fromMe ? "sent" : "received"}`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="chat-placeholder">대화 상대를 선택해주세요</div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ChatPage;
