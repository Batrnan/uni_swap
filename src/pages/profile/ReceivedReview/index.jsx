import ProductLayout from '../../../components/profile/ProductLayout';
import ReviewCheckItem from '../../../components/profile/ReviewCheckItem';

const dummyData = [
  {
    id: 1,
    title: '확률과 통계 교재 판매합니다다다다다다다',
    like: true,
    price: '150,000,000',
    desc: '필기 안되어 있고 깨끗합니다.',
    rate: 3,
  },
  {
    id: 2,
    title: '확률과 통계 교재 판매합니다',
    like: true,
    price: '70,000',
    desc: '필기다.',
    rate: 2,
  },
  {
    id: 3,
    title: '토익 교재 싸게 팔아요',
    like: true,
    price: '20,000',
    desc: '안되어 있고 깨끗합니다.',
    rate: 3,
  },
  {
    id: 4,
    title: '자료구조와 알고리즘 교재',
    like: true,
    price: '3,000',
    desc: '필기 안되어 있고 깨끗합니다.',
    rate: 4,
  },
  {
    id: 5,
    title: '자료구조와 알고리즘 교재',
    like: true,
    price: '4,000,000',
    desc: '필기 안되어 있고 깨끗합니다.',
    rate: 3,
  },
  {
    id: 6,
    title: '자료구조와 알고리즘 교재',
    like: true,
    price: '100,000',
    desc: '필기 안되어 있고 깨끗합니다.',
  },
  {
    id: 7,
    title: '자료구조와 알고리즘 교재',
    like: true,
    price: '150,000,000',
    desc: '필기 안되어 있고 깨끗합니다.',
  },
  {
    id: 8,
    title: '자료구조와 알고리즘 교재',
    like: true,
    price: '150,000,000',
    desc: '필기 안되어 있고 깨끗합니다.',
  },
];

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
        {dummyData.map((product) => (
          <ReviewCheckItem
            key={product.id}
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
