import ProductLayout from '../../../components/profile/ProductLayout';
import ReviewItem from '../../../components/profile/ReviewItem';
import ReviewList from '../../../components/profile/ReviewList';
import { products } from '../../../data/products';

const MyBuyList = () => {
  return (
    <ProductLayout title="내가 구매한 상품">
      <ReviewList>
        {products.map((product) => (
          <ReviewItem key={product.id} {...product} product={product} />
        ))}
      </ReviewList>
    </ProductLayout>
  );
};

export default MyBuyList;
