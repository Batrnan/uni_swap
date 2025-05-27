import ProductLayout from '../../../components/profile/ProductLayout';
import ReviewCheckItem from '../../../components/profile/ReviewCheckItem';
import { myProducts } from '../../../data/myProducts';

const ReceivedReview = () => {
  return (
    <ProductLayout title="받은 리뷰">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        {myProducts.map((product) => (
          <ReviewCheckItem
            key={product.id}
            image={product.image}
            title={product.title}
            desc={product.desc}
            rate={product.rate}
            received
          />
        ))}
      </div>
    </ProductLayout>
  );
};

export default ReceivedReview;
