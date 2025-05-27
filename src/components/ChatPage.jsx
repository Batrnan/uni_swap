// src/components/ChatPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaEllipsisV } from 'react-icons/fa';
import './ChatPage.css';

const chats = [
  {
    id: '1',
    name: 'GCW',
    avatar: 'GCW.jpg',
    messages: [
      { fromMe: true, text: '안녕하세요! 구매 가능할까요?' },
      { fromMe: false, text: '네 가능합니다.' },
    ],
  },
  {
    id: '2',
    name: '홍대피플',
    avatar: 'Hong.jpg',
    messages: [
      { fromMe: false, text: '거래 가능한가요?' },
      { fromMe: true, text: '네, 직거래만 가능합니다.' },
    ],
  },
  {
    id: '3',
    name: '서연고 레츠고',
    avatar: 'Watch.jpg',
    messages: [{ fromMe: false, text: '혹시 사이즈가 어떻게 될까요?' }],
  },
];

const ChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chatIndex = chats.findIndex((c) => c.id === id);
  const selected = chats[chatIndex];
  const [menuOpen, setMenuOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const menuRef = useRef(null);
  const messagesEndRef = useRef(null);

  // 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // 새 메시지 추가 시 스크롤
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selected?.messages]);

  const handleSend = () => {
    if (!newMessage.trim() || !selected) return;
    selected.messages.push({ fromMe: true, text: newMessage.trim() });
    setNewMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const handleBlock = () => {
    alert('차단되었습니다');
    navigate('/chat');
  };

  return (
    <div className="chat-container">
      <div className="chat-wrapper">
        {/* 좌측 채팅 목록 */}
        <aside className="chat-list">
          <div className="chat-list-header">채팅</div>
          {chats.map((c) => {
            const avatarSrc = require(`../assets/${c.avatar}`);
            return (
              <Link
                to={`/chat/${c.id}`}
                key={c.id}
                className={`chat-item ${c.id === id ? 'active' : ''}`}
              >
                <img src={avatarSrc} alt={c.name} className="avatar" />
                <div className="chat-info">
                  <div className="chat-name">{c.name}</div>
                  <div className="chat-last">
                    {c.messages.length
                      ? c.messages[c.messages.length - 1].text
                      : '메시지 없음'}
                  </div>
                </div>
              </Link>
            );
          })}
        </aside>

        {/* 우측 대화창 */}
        <main className="chat-window">
          {selected ? (
            <>
              <div className="chat-window-header">
                <div className="partner-info">
                  <img
                    src={require(`../assets/${selected.avatar}`)}
                    alt={selected.name}
                    className="avatar"
                  />
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
                        <button onClick={handleBlock}>대화상대 차단</button>
                      </li>
                      <li>
                        <button onClick={() => navigate('/complains')}>
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
                            navigate('/chat');
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
                    className={`message ${msg.fromMe ? 'sent' : 'received'}`}
                  >
                    {msg.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="chat-input-area">
                <textarea
                  className="chat-input"
                  placeholder="메시지를 입력하세요..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button className="send-btn" onClick={handleSend}>
                  전송
                </button>
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
