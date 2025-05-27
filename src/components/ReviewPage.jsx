// src/components/ReviewPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './ReviewPage.css';
import { products } from '../data/products';

const ReviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id, 10));
  const title = product ? product.title : '상품';

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 후기 저장 API 호출
    console.log({ productId: id, rating, text });
    navigate('/main');
  };

  return (
    <div className="review-container">
      <div className="review-form-wrapper">
        <h2 className="review-header">{title}의 상품 후기를 작성해주세요.</h2>

        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`star ${star <= (hover || rating) ? 'filled' : ''}`}
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
