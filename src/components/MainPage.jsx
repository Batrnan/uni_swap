// src/components/MainPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import './MainPage.css';
import { products } from '../data/products';

const categories = [
  '전체',
  '교재',
  '문구류',
  '의류',
  '생활용품',
  '무료나눔',
  '기타제품',
];

const MainPage = () => {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState('전체');

  const filteredProducts =
    selectedCat === '전체'
      ? products
      : products.filter((p) => p.category === selectedCat);

  return (
    <div className="main-container">
      {/* 공통 헤더 */}

      <div className="main-wrapper">
        {/* CATEGORY NAV */}
        <nav className="category-nav">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`nav-item ${cat === selectedCat ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </div>
          ))}
        </nav>

        {/* TIP BAR */}
        <div className="tip-bar">거래 사기 방지 팁 및 피해 신고 관련</div>

        {/* PRODUCT GRID */}
        <section className="product-grid">
          {filteredProducts.map((p) => {
            const imgSrc = require(`../assets/${p.image}`);
            const handleClick = () => {
              navigate(`/products/${p.id}`, { state: { product: p } });
            };
            return (
              <div key={p.id} className="product-card" onClick={handleClick}>
                <img src={imgSrc} alt={p.title} className="product-image" />
                <h3 className="product-title">{p.title}</h3>
                <p className="product-price">
                  {p.price > 0 ? `${p.price.toLocaleString()}원` : '무료나눔'}
                </p>
              </div>
            );
          })}
        </section>
      </div>

      {/* FLOATING ACTION BUTTON */}
      <button className="fab" onClick={() => navigate('/Createproduct')}>
        <FaPlus className="icon" /> 판매글 쓰기
      </button>
    </div>
  );
};

export default MainPage;
