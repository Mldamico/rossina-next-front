import React from 'react';
import { ProductLayout } from '../../components/products/ProductLayout';
import { Sidebar } from '../../components/products/Sidebar';
import { Lenceria } from '../../components/lenceria/Lenceria';

const LenceriaPage = () => {
  return (
    <ProductLayout>
      <Sidebar />
      <Lenceria />
    </ProductLayout>
  );
};

export default LenceriaPage;
