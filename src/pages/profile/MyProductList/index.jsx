import React from 'react';
import ProductList from '../../../components/profile/ProductList';
import { products } from '../../../data/products';

const MyProductList = () => {
  return <ProductList title="나의 판매 상품">{products}</ProductList>;
};

export default MyProductList;
