import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import MainPage from './components/MainPage';
import NoticePage from './components/NoticePage';
import NoticeDetailPage from './components/NoticeDetailPage';
import ProfileEdit from './pages/profile/ProfileEdit';
import MyProductList from './pages/profile/MyProductList';
import MyLikeList from './pages/profile/MyLikeList';
import HeaderLayout from './components/share/HeaderLayout';
import MyBuyList from './pages/profile/MyBuyList';
import MyProfile from './pages/profile/MyProfile';
import PublicProfile from './pages/profile/PublicProfile';
import MyProductDetail from "./pages/product/MyProductDetail";
import ProductDetail from "./pages/product/ProductDetail";
import WriteProduct from "./pages/product/WriteProduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<HeaderLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/notices" element={<NoticePage />} />
          <Route path="/notices/:id" element={<NoticeDetailPage />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/profile/myproduct" element={<MyProductList />} />
          <Route path="/profile/mylike" element={<MyLikeList />} />
          <Route path="/profile/mybuy" element={<MyBuyList />} />
          <Route path="/public-profile" element={<PublicProfile />} />
          <Route path="/products" element={<ProductDetail />} />
          <Route path="/Createproduct" element={<WriteProduct />} />
          <Route path="/myproducts" element={<MyProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 초기 설정 필수!!!
// npm install react-router-dom
// npm install react-icons
// npm install react-datepicker date-fns
