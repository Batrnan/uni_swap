// src/App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 공통 컴포넌트
import HeaderLayout from "./components/share/HeaderLayout";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import MainPage from "./components/MainPage";
import NoticePage from "./components/NoticePage";
import NoticeFormPage from "./components/NoticeFormPage";
import NoticeDetailPage from "./components/NoticeDetailPage";

// 채팅 및 리뷰
import ChatPage from "./components/ChatPage";
import ReviewPage from "./components/ReviewPage";

// 프로필 관련
import ProfileEdit from "./pages/profile/ProfileEdit";
import MyProductList from "./pages/profile/MyProductList";
import MyLikeList from "./pages/profile/MyLikeList";
import MyBuyList from "./pages/profile/MyBuyList";
import MyProfile from "./pages/profile/MyProfile";
import PublicProfile from "./pages/profile/PublicProfile";
import MyReview from "./pages/profile/MyReview";
import ReceivedReview from "./pages/profile/ReceivedReview";

// 상품 관련
import MyProductDetail from "./pages/product/MyProductDetail";
import ProductDetail from "./pages/product/ProductDetail";
import WriteProduct from "./pages/product/WriteProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인/회원가입은 헤더 제외 */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* HeaderLayout 안에 들어가는 페이지들 */}
        <Route element={<HeaderLayout />}>
          {/* 공통 페이지 */}
          <Route path="/main" element={<MainPage />} />
          <Route path="/notices" element={<NoticePage />} />
          <Route path="/notices/:id" element={<NoticeDetailPage />} />
          <Route path="/notices/:id/edit" element={<NoticeFormPage />} />

          {/* 채팅 및 리뷰 */}
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/review/:id" element={<ReviewPage />} />

          {/* 프로필 관련 */}
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/profile/myproduct" element={<MyProductList />} />
          <Route path="/profile/mylike" element={<MyLikeList />} />
          <Route path="/profile/mybuy" element={<MyBuyList />} />
          <Route path="/profile/myreview" element={<MyReview />} />
          <Route path="/profile/received-review" element={<ReceivedReview />} />
          <Route path="/public-profile" element={<PublicProfile />} />

          {/* 상품 관련 */}
          <Route path="/products" element={<ProductDetail />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/Createproduct" element={<WriteProduct />} />
          <Route path="/myproducts" element={<MyProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 필수 설치 패키지 목록:
// npm install react-router-dom react-icons react-datepicker date-fns
// Node.js 설치 필요
