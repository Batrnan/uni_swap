// src/components/MainPage.js
import React from "react";
import "./SharedPage.css";
import logo from "../assets/UNI_SWAP_Logo.png";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaBullhorn,
  FaComments,
  FaUser,
  FaShoppingCart,
  FaPlus,
} from "react-icons/fa";

const SharedPage = () => {
  return (
    <div className="main-container">
      {/* ── 가운데 정렬용 래퍼 ── */}
      <div className="main-wrapper">
        {/* ── HEADER ── */}
        <header className="main-header">
          <div className="logo-section">
            <Link to="/main">
              <img src={logo} alt="UNI_SWAP Logo" className="login-logo" />
            </Link>
          </div>
          <div className="header-icons">
            <FaSearch className="icon" />
            <Link to="/notices">
              <FaBullhorn className="icon" />
            </Link>
            <FaComments className="icon" />
            <FaUser className="icon" />
          </div>
        </header>
      </div>
    </div>
  );
};

export default MainPage;
