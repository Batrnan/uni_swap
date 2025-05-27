import ProductList from '../../../components/profile/ProductList';
import { likeProducts } from '../../../data/likeProducts';

const MyLikeList = () => {
  return (
    <ProductList title="내가 찜한 상품" showLikeButton>
      {likeProducts}
    </ProductList>
  );
};

export default MyLikeList;
