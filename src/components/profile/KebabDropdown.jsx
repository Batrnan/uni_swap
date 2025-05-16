import { useState, useRef, useEffect } from 'react';
import { GoKebabHorizontal } from 'react-icons/go';
import styles from './KebabDropdown.module.css'; // 드롭다운 관련 스타일

const KebabDropdown = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className={styles.kebabWrapper} ref={menuRef}>
      <GoKebabHorizontal
        size={28}
        className={styles.kebab}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.dropdown}>
          <button className={styles.dropdownItem} onClick={() => {}}>
            상품 보기
          </button>
          <button className={styles.dropdownItem} onClick={() => {}}>
            리뷰 수정
          </button>
          <button className={styles.dropdownItem} onClick={() => {}}>
            리뷰 삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default KebabDropdown;
