import ProductCard from './ProductCard';
import ProductLayout from './ProductLayout';

const ProductList = ({ title, children: products, showLikeButton }) => {
  return (
    <ProductLayout title={title}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: 'repeat(3, 250px)',
          gap: '40px 20px',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            product={product}
            showLikeButton={showLikeButton}
          />
        ))}
      </div>
    </ProductLayout>
  );
};

export default ProductList;
