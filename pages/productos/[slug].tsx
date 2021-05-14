import React from 'react';
import { ProductDetail } from '../../components/products/ProductDetail';

const ProductDetailPage = ({ query }) => {
  console.log(query);
  return <ProductDetail productId={query.id} />;
};

export default ProductDetailPage;
