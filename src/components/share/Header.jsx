// src/components/share/Header.js
import logo from '../../assets/UNI_SWAP_Logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBullhorn, FaComments, FaSearch, FaUser } from 'react-icons/fa';
import styles from './Header.module.css';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const isMain = location.pathname === '/main';

  const handleSearch = (e) => {
    if (e.key === 'Enter' && keyword.trim() !== '') {
      setKeyword('');
      navigate(`/main?search=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <header className={styles.header}>
      <div>
        <Link to="/main">
          <img src={logo} alt="UNI_SWAP Logo" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.icons}>
        {isMain ? (
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="찾으시는 물건이 있나요?"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={handleSearch}
              className={styles.searchInput}
            />
            <FaSearch className={styles.searchIcon} />
          </div>
        ) : (
          <div />
        )}

        <Link to="/notices">
          <FaBullhorn className={styles.icon} />
        </Link>
        <Link to="/chat">
          <FaComments className={styles.icon} />
        </Link>
        <Link to="/profile">
          <FaUser className={styles.icon} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
