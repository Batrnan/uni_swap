import ProductList from '../../../components/profile/ProductList';
import { myProducts } from '../../../data/myProducts';

const MyProductList = () => {
  return <ProductList title="나의 판매 상품">{myProducts}</ProductList>;
};

export default MyProductList;
