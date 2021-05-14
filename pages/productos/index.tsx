import React from 'react';
import { Page } from '../../components/Page';
import { ProductLayout } from '../../components/products/ProductLayout';
import { Products } from '../../components/products/Products';
import { Sidebar } from '../../components/products/Sidebar';
import { useAllProductsQuery } from '../../types/generated-queries';
import styled from 'styled-components';

const DisplayProducts = styled.main``;

const ProductosPage = () => {
  return (
    <ProductLayout>
      <Sidebar />
      <Products />
    </ProductLayout>
  );
};

export default ProductosPage;
