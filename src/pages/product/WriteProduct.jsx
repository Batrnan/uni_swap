import React, { useState } from "react";
import styles from "./WriteProduct.module.css";
import KakaoMapSelect from "../../components/product/kakaoMapSelect"; // 경로 맞게 조정하세요

const WriteProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("판매중");
  const [selectLocationOpen, setSelectLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(""); // 선택된 장소 이름 저장

  const handleSubmit = () => {
    alert("상품이 등록되었습니다!");
  };

  // 카카오 지도에서 장소 선택 완료 콜백
  const handleLocationSelect = (locationName) => {
    setSelectedLocation(locationName);
    setSelectLocationOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>상품등록하기</h1>

      <label className={styles.photoSelector}>
        상품 사진 선택
        <input type="file" accept="image/*" style={{ display: "none" }} />
      </label>

      <input
        type="text"
        placeholder="상품 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />

      <input
        type="number"
        placeholder="가격"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className={styles.input}
      />

      <textarea
        placeholder="상품 소개"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.textarea}
      />

      {/* 거래장소 선택 버튼 */}
      <button
        type="button"
        className={styles.selectLocationButton}
        onClick={() => setSelectLocationOpen(true)}
      >
        거래장소 선택하기
      </button>

      {/* 선택된 거래장소 보여주기 */}
      {selectedLocation && (
        <div className={styles.selectedLocation}>
          선택된 장소: {selectedLocation}
        </div>
      )}

      <div className={styles.radioGroup}>
        <label>
          <input
            type="radio"
            name="status"
            value="판매중"
            checked={status === "판매중"}
            onChange={() => setStatus("판매중")}
          />
          판매중
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="예약중"
            checked={status === "예약중"}
            onChange={() => setStatus("예약중")}
          />
          예약중
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="판매완료"
            checked={status === "판매완료"}
            onChange={() => setStatus("판매완료")}
          />
          판매완료
        </label>
      </div>

      <button onClick={handleSubmit} className={styles.submitButton}>
        글 작성하기
      </button>

      {/* 모달 형태로 지도 선택창 띄우기 */}
      {selectLocationOpen && (
        <div className={styles.mapModalBackground}>
          <div className={styles.mapModalContainer}>
            <button
              className={styles.mapCloseButton}
              onClick={() => setSelectLocationOpen(false)}
            >
              ×
            </button>
            <h2 className={styles.mapModalHeader}>거래장소 선택</h2>
            <div className={styles.mapArea}>
              <KakaoMapSelect onSelect={handleLocationSelect} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WriteProduct;
