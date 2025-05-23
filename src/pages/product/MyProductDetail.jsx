import Header from "../../components/share/Header";
import React, { useState, useRef, useEffect } from "react";
import styles from "./MyProductDetail.module.css";

const ProductPage = ({
  profileImageUrl = "https://via.placeholder.com/90",
  userName = "홍길동",
  major = "소프트웨어 전공",
  productImageUrl = "https://via.placeholder.com/330x330",
  title = "노트북 판매합니다",
  price = "100,000원",
  description = "상태 양호, 사용감 있음",
  onChatClick = () => {},
  onLikeClick = (liked) => {},
  initialLiked = false,
  onEdit = () => {},      // 수정 클릭 콜백 추가
  onDelete = () => {},    // 삭제 클릭 콜백 추가
}) => {
  const [liked, setLiked] = useState(initialLiked);
  const [optionOpen, setOptionOpen] = useState(false);
  const optionRef = useRef();

  const toggleLike = () => {
    setLiked(!liked);
    onLikeClick(!liked);
  };

  // 바깥 클릭 시 옵션창 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionRef.current && !optionRef.current.contains(event.target)) {
        setOptionOpen(false);
      }
    };
    if (optionOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionOpen]);

  return (
    <div className={styles.container}>
      {/* 프로필 섹션 */}
      <div className={styles.profileSection}>
        <img
          src={profileImageUrl}
          className={styles.profileImage}
          alt="프로필 이미지"
        />
        <div className={styles.profileText}>
          <div className={styles.userName}>{userName}</div>
          <div className={styles.major}>{major}</div>
        </div>

        {/* 오른쪽 상단 ... 버튼 */}
        <div className={styles.optionWrapper} ref={optionRef}>
          <button
            className={styles.optionButton}
            onClick={() => setOptionOpen((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={optionOpen}
            aria-label="게시글 옵션 열기"
          >
            &#x22EE; {/* 세로 점 3개 */}
          </button>

          {optionOpen && (
            <div className={styles.optionMenu}>
              <button
                className={styles.optionItem}
                onClick={() => {
                  setOptionOpen(false);
                  onEdit();
                }}
              >
                게시물 수정하기
              </button>
              <button
                className={styles.optionItem}
                onClick={() => {
                  setOptionOpen(false);
                  onDelete();
                }}
              >
                게시물 삭제하기
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 상품 상세 영역 */}
      <div className={styles.productSection}>
        <img src={productImageUrl} alt="상품" className={styles.productImage} />
        <div className={styles.productInfo}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.price}>{price}</div>

          {/* 위치 정보 추가 */}
          <div className={styles.location}>
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
            <span className={styles.locationName}>서울특별시 강남구 역삼동</span>
          </div>

          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <button className={styles.chatButton} onClick={onChatClick}>
              채팅 확인하기
            </button>
            <button
              className={`${styles.likeButton} ${liked ? styles.liked : ""}`}
              onClick={toggleLike}
              aria-pressed={liked}
              aria-label={liked ? "좋아요 취소" : "좋아요"}
              type="button"
            >
              {liked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="teal"
                  width="36"
                  height="36"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 
                           3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                           19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="teal"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="36"
                  height="36"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 
                           3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                           19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
