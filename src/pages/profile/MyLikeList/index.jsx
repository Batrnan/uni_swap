import React from 'react';
import ProductList from '../../../components/profile/ProductList';

const dummyData = [
  { id: 1, title: '확률과 통계 교재 판매합니다다다다다다다', like: true },
  { id: 2, title: '확률과 통계 교재 판매합니다', like: true },
  { id: 3, title: '토익 교재 싸게 팔아요', like: true },
  { id: 4, title: '자료구조와 알고리즘 교재', like: true },
  { id: 5, title: '자료구조와 알고리즘 교재', like: true },
  { id: 6, title: '자료구조와 알고리즘 교재', like: true },
  { id: 7, title: '자료구조와 알고리즘 교재', like: true },
  { id: 8, title: '자료구조와 알고리즘 교재', like: true },
  { id: 9, title: '자료구조와 알고리즘 교재', like: true },
  { id: 10, title: '자료구조와 알고리즘 교재', like: true },
  { id: 11, title: '자료구조와 알고리즘 교재', like: true },
  { id: 12, title: '자료구조와 알고리즘 교재', like: true },
];

const MyLikeList = () => {
  return (
    <ProductList title="내가 찜한 상품" showLikeButton>
      {dummyData}
    </ProductList>
  );
};

export default MyLikeList;
