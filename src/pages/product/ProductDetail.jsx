// src/components/ProductDetail/ProductPage.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Header from "../../components/share/Header";
import styles from "./ProductDetail.module.css";
import { products } from "../../data/products";

const ProductPage = ({ initialLiked = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id, 10));
  const [liked, setLiked] = useState(initialLiked);

  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  const toggleLike = () => {
    setLiked((prev) => !prev);
    // onLikeClick 콜백이 필요하다면 호출
  };

  const handleChat = () => {
    navigate(`/chat/${id}`);
  };

  return (
    <>
      <div className={styles.container}>
        {/* 프로필 섹션 */}
        <div className={styles.profileSection}>
          <img
            src={product.profileImageUrl || "https://via.placeholder.com/90"}
            className={styles.profileImage}
            alt="프로필"
          />
          <div className={styles.profileText}>
            <div className={styles.userName}>
              {product.userName || "홍길동"}
            </div>
            <div className={styles.major}>
              {product.major || "소프트웨어 전공"}
            </div>
          </div>
        </div>

        {/* 상품 상세 섹션 */}
        <div className={styles.productSection}>
          <img
            src={require(`../../assets/${product.image}`)}
            alt={product.title}
            className={styles.productImage}
          />
          <div className={styles.productInfo}>
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.price}>
              {product.price > 0
                ? `${product.price.toLocaleString()}원`
                : "무료나눔"}
            </div>
            <div className={styles.location}>
              {/* 위치 아이콘 */}
              <svg
                className={styles.locationIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  fill="teal"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5
                     c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                />
              </svg>
              <span className={styles.locationName}>
                {product.location || "서울특별시 강남구 역삼동"}
              </span>
            </div>

            <p className={styles.description}>
              {product.description || "상태 양호, 사용감 있음"}
            </p>

            {/* 액션 버튼 */}
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.chatButton}
                onClick={handleChat}
              >
                채팅하기
              </button>
              <button
                type="button"
                className={styles.likeButton}
                onClick={toggleLike}
                aria-pressed={liked}
                aria-label={liked ? "좋아요 취소" : "좋아요"}
              >
                {liked ? (
                  <FaHeart size={24} color="teal" />
                ) : (
                  <FaRegHeart size={24} stroke="teal" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
