import React from 'react';
import { ProductLayout } from '../../components/products/ProductLayout';
import { Products } from '../../components/products/Products';
import { Sidebar } from '../../components/products/Sidebar';

const ProductosPage = () => {
  return (
    <ProductLayout>
      <Sidebar />
      <Products />
    </ProductLayout>
  );
};

export default ProductosPage;
