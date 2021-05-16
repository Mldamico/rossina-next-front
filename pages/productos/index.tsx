import { useRouter } from 'next/router';
import React from 'react';
import { ProductLayout } from '../../components/products/ProductLayout';
import { Products } from '../../components/products/Products';
import { Sidebar } from '../../components/products/Sidebar';

const ProductosPage = () => {
  const { query } = useRouter();
  return (
    <ProductLayout>
      <Sidebar />
      <Products page={Number(query.page) || 1} />
    </ProductLayout>
  );
};

export default ProductosPage;
