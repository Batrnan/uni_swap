// src/components/share/Header.js
import logo from "../../assets/UNI_SWAP_Logo.png";
import { Link } from "react-router-dom";
import { FaBullhorn, FaComments, FaSearch, FaUser } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/main">
          <img src={logo} alt="UNI_SWAP Logo" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.icons}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="찾으시는 물건이 있나요?"
            className={styles.searchInput}
          />
          <FaSearch className={styles.searchIcon} />
        </div>

        {/* 공지사항 */}
        <Link to="/notices">
          <FaBullhorn className={styles.icon} />
        </Link>

        {/* 채팅*/}
        <Link to="/chat">
          <FaComments className={styles.icon} />
        </Link>

        {/* 프로필 */}
        <Link to="/profile">
          <FaUser className={styles.icon} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
