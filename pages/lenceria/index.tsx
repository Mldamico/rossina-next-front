import React from 'react';
import { ProductLayout } from '../../components/products/ProductLayout';
import { Lenceria } from '../../components/lenceria/Lenceria';
import { LenceriaSidebar } from '../../components/lenceria/LenceriaSidebar';

const LenceriaPage = () => {
  return (
    <ProductLayout>
      <LenceriaSidebar />
      <Lenceria />
    </ProductLayout>
  );
};

export default LenceriaPage;
