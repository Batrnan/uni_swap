// src/components/MainPage.js
import React from "react";
import "./MainPage.css";
import logo from "../assets/UNI_SWAP_Logo.png";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaBullhorn,
  FaComments,
  FaUser,
  FaShoppingCart,
  FaPlus,
} from "react-icons/fa";

const categories = [
  "교재",
  "문구류",
  "의류",
  "생활용품",
  "무료나눔",
  "기타제품",
];

const products = [
  {
    // 삽입 예시
    id: 1,
    title: "[인기상품] 활동 교재 판매합니다.",
    price: 8000,
  },
  { id: 2, title: "운영체제 교재 팝니다.", price: 0 },
  { id: 3, title: "콜잉 II 필요하신 분", price: 0 },
  { id: 4, title: "학부생 통계 교재 판매합니다.", price: 5000 },
  { id: 5, title: "학부생 통계 교재 팝니다.", price: 4500 },
  { id: 6, title: "토익 교재 싸게 팔아요", price: 10000 },
  { id: 7, title: "테스트", price: 10000 },
  { id: 8, title: "테스트", price: 10000 },
  { id: 9, title: "테스트", price: 10000 },
];

const MainPage = () => {
  return (
    <div className="main-container">
      {/* ── 가운데 정렬용 래퍼 ── */}
      <div className="main-wrapper">
        {/* ── HEADER ── */}
        <header className="main-header">
          <div className="logo-section">
            <Link to="/main">
              <img src={logo} alt="UNI_SWAP Logo" className="login-logo" />
            </Link>
          </div>
          <div className="header-icons">
            <FaSearch className="icon" />
            <Link to="/notices">
              <FaBullhorn className="icon" />
            </Link>
            <FaComments className="icon" />
            <FaUser className="icon" />
          </div>
        </header>

        {/* ── CATEGORY NAV ── */}
        <nav className="category-nav">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`nav-item ${cat === "교재" ? "active" : ""}`}
            >
              {cat}
            </div>
          ))}
        </nav>

        {/* ── TIP BAR ── */}
        <div className="tip-bar">
          <FaBullhorn className="tip-icon" />
          <span>거래 사기 방지 팁 및 피해 신고 관련</span>
        </div>

        {/* ── PRODUCT GRID ── */}
        <section className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-image" />
              <h3 className="product-title">{p.title}</h3>
              <p className="product-price">
                {p.price > 0 ? `${p.price.toLocaleString()}원` : "무료나눔"}
              </p>
            </div>
          ))}
        </section>
      </div>
      {/* ── FLOATING ACTION BUTTON ── */}
      <button className="fab">
        <FaPlus className="icon" />
        판매글 쓰기
      </button>
    </div>
  );
};

export default MainPage;
