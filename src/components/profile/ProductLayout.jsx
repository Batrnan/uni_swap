import styles from './ProductLayout.module.css';
const ProductLayout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default ProductLayout;
