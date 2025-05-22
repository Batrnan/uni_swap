import ProductLayout from '../../../components/profile/ProductLayout';
import ReviewItem from '../../../components/profile/ReviewItem';
import ReviewList from '../../../components/profile/ReviewList';

const dummyData = [
  {
    id: 1,
    title: '확률과 통계 교재 판매합니다다다다다다다다다',
    like: true,
    price: '150,000,000',
    desc: '필기 안되어 있고 깨끗합니다.',
  },
  {
    id: 2,
    title: '확률과 통계 교재 판매합니다',
    like: true,
    price: '70,000',
    desc: '필기다.',
  },
  {
    id: 3,
    title: '토익 교재 싸게 팔아요',
    like: true,
    price: '20,000',
    desc: '안되어 있고 깨끗합니다.',
  },
  {
    id: 4,
    title: '자료구조와 알고리즘 교재',
    like: true,
    price: '3,000',
    desc: '필기 안되어 있고 깨끗합니다.',
  },
  {
    id: 5,
    title: '자료구조와 알고리즘 교재',
    like: true,
    price: '4,000,000',
    desc: '필기 안되어 있고 깨끗합니다.',
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

const MyBuyList = () => {
  return (
    <ProductLayout title="내가 구매한 상품">
      <ReviewList>
        {dummyData.map((product) => (
          <ReviewItem
            key={product.id}
            title={product.title}
            price={product.price}
            desc={product.desc}
          />
        ))}
      </ReviewList>
    </ProductLayout>
  );
};

export default MyBuyList;
