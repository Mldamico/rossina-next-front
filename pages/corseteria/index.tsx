import React from 'react';
import { ProductLayout } from '../../components/products/ProductLayout';
import { Sidebar } from '../../components/products/Sidebar';
import { Corseteria } from '../../components/corseteria/Corseteria';

const LenceriaPage = () => {
  return (
    <ProductLayout>
      <Sidebar />
      <Corseteria />
    </ProductLayout>
  );
};

export default LenceriaPage;
