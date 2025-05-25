// src/components/product/KakaoMapSelect.jsx
import React, { useEffect, useRef } from "react";

const markerData = [
  { name: "중앙도서관 현관", lat: 37.452581, lng: 127.132636 },
  { name: "Ai공학관 PH층", lat: 37.455148, lng: 127.133486 },
  { name: "비전타워 스타벅스", lat: 37.451126, lng: 127.127175 },
  { name: "글로벌센터 4층 현관", lat: 37.451821, lng: 127.12734 },
  { name: "가천관 1층 현관", lat: 37.450408, lng: 127.129949 },
];

const KakaoMapSelect = ({ onSelect }) => {
  const mapRef = useRef(null);
  const infoWindows = useRef([]);

  useEffect(() => {
    window.kakao.maps.load(() => {
      // 1) 지도 초기화
      const options = {
        center: new window.kakao.maps.LatLng(37.452581, 127.132636),
        level: 4,
      };
      const map = new window.kakao.maps.Map(mapRef.current, options);

      // 2) 마커와 인포윈도우 생성
      markerData.forEach((item) => {
        const position = new window.kakao.maps.LatLng(item.lat, item.lng);
        const marker = new window.kakao.maps.Marker({ position, map });

        const infoWindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:8px;font-size:14px;">${item.name}</div>`,
        });
        infoWindows.current.push(infoWindow);

        // 3) 마커 클릭 시
        window.kakao.maps.event.addListener(marker, "click", () => {
          // 열려 있는 모든 InfoWindow 닫기
          infoWindows.current.forEach((iw) => iw.close());
          // 클릭한 마커에 대한 InfoWindow 열기
          infoWindow.open(map, marker);
          // 부모 컴포넌트에 선택된 장소 전달
          onSelect(item.name);
        });
      });
    });
  }, [onSelect]);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "400px", borderRadius: "8px" }}
    />
  );
};

export default KakaoMapSelect;
