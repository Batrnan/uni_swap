import React, { useEffect, useRef } from "react";

const KakaoMapSelect = ({ onSelect }) => {
  const mapRef = useRef(null);

useEffect(() => {
  if (window.kakao && window.kakao.maps && mapRef.current) {
    const container = mapRef.current;
    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.9780),
      level: 3,
    };
    const map = new window.kakao.maps.Map(container, options);
    
    window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
      const latlng = mouseEvent.latLng;
      onSelect({
        lat: latlng.getLat(),
        lng: latlng.getLng(),
      });
    });
  }
}, [onSelect]);



  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "300px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    />
  );
};

export default KakaoMapSelect;
