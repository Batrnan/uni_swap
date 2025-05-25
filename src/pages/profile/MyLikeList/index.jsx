import ProductList from '../../../components/profile/ProductList';
import { products } from '../../../data/products';

const MyLikeList = () => {
  return (
    <ProductList title="내가 찜한 상품" showLikeButton>
      {products}
    </ProductList>
  );
};

export default MyLikeList;
