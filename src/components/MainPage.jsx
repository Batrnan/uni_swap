// src/components/MainPage.jsx
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./MainPage.css";

const categories = [
  "전체",
  "교재",
  "문구류",
  "의류",
  "생활용품",
  "무료나눔",
  "기타제품",
];

// products 배열에 category 프로퍼티 추가
const products = [
  {
    id: 1,
    category: "교재",
    title: "[인기상품] 활동 교재 판매합니다.",
    price: 8000,
    image: "Activity_Book.jpg",
  },
  {
    id: 2,
    category: "기타제품",
    title: "투썸 기프티콘 팝니당.",
    price: 14000,
    image: "Giftcon.jpg",
  },
  {
    id: 3,
    category: "의류",
    title: "가천 후드티 S 사이즈 팔아요",
    price: 15000,
    image: "Gachon_Hood.jpg",
  },
  {
    id: 4,
    category: "교재",
    title: "학부생 통계 교재 판매합니다.",
    price: 5000,
    image: "Statistics_Book.jpg",
  },
  {
    id: 5,
    category: "기타제품",
    title: "skt 2g",
    price: 3000,
    image: "SKT.jpg",
  },
  {
    id: 6,
    category: "문구류",
    title: "문구 세트 정리합니다",
    price: 1000,
    image: "Stationery.jpg",
  },
  {
    id: 7,
    category: "교재",
    title: "이산수학 팝니다",
    price: 15000,
    image: "Discrete_Mathematics.jpg",
  },
  {
    id: 8,
    category: "교재",
    title: "운영체제 공룡책 팝니다",
    price: 20000,
    image: "Operating_System.jpg",
  },
  {
    id: 9,
    category: "무료나눔", // ← 여기 카테고리를 "무료나눔"으로 변경
    title: "CGV 상품권 팝니다",
    price: 0,
    image: "CGV.jpg",
  },
  {
    id: 10,
    category: "생활용품",
    title: "폼클렌징 팝니다",
    price: 6000,
    image: "Form_Cleansing.jpg",
  },
];

const MainPage = () => {
  // 초기 선택을 "전체"로
  const [selectedCat, setSelectedCat] = useState("전체");

  // "전체"면 모든 상품, 아니면 해당 카테고리만
  const filteredProducts =
    selectedCat === "전체"
      ? products
      : products.filter((p) => p.category === selectedCat);

  return (
    <div className="main-container">
      <div className="main-wrapper">
        {/* CATEGORY NAV */}
        <nav className="category-nav">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`nav-item ${cat === selectedCat ? "active" : ""}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </div>
          ))}
        </nav>

        {/* TIP BAR */}
        <div className="tip-bar">
          <span>거래 사기 방지 팁 및 피해 신고 관련</span>
        </div>

        {/* PRODUCT GRID */}
        <section className="product-grid">
          {filteredProducts.map((p) => {
            const imgSrc = require(`../assets/${p.image}`);
            return (
              <div key={p.id} className="product-card">
                <img src={imgSrc} alt={p.title} className="product-image" />
                <h3 className="product-title">{p.title}</h3>
                <p className="product-price">
                  {p.price > 0 ? `${p.price.toLocaleString()}원` : "무료나눔"}
                </p>
              </div>
            );
          })}
        </section>
      </div>

      {/* FLOATING ACTION BUTTON */}
      <button className="fab">
        <FaPlus className="icon" />
        판매글 쓰기
      </button>
    </div>
  );
};

export default MainPage;
