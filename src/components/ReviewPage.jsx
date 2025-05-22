// src/components/ReviewPage.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./ReviewPage.css";

// MainPage와 동일한 제품 리스트를 복사해 옵니다.
const products = [
  { id: 1, title: "[인기상품] 활동 교재 판매합니다.", price: 8000 },
  { id: 2, title: "운영체제 교재 팝니다.", price: 0 },
  { id: 3, title: "콜잉 II 필요하신 분", price: 0 },
  { id: 4, title: "학부생 통계 교재 판매합니다.", price: 5000 },
  { id: 5, title: "학부생 통계 교재 팝니다.", price: 4500 },
  { id: 6, title: "토익 교재 싸게 팔아요", price: 10000 },
  { id: 7, title: "테스트", price: 10000 },
  { id: 8, title: "테스트", price: 10000 },
  { id: 9, title: "테스트", price: 10000 },
];

const ReviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id, 10));
  const title = product ? product.title : "상품";

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 후기 저장 API 호출
    console.log({ productId: id, rating, text });
    navigate("/main");
  };

  return (
    <div className="review-container">
      <div className="review-form-wrapper">
        <h2 className="review-header">{title}의 상품 후기를 작성해주세요.</h2>

        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`star ${star <= (hover || rating) ? "filled" : ""}`}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            className="review-textarea"
            placeholder="내용을 작성하세요."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button type="submit" className="review-submit-button">
            후기 등록
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
