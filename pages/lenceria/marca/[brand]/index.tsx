import React from 'react';
import { Brands } from '../../../../components/brands/Brands';
import { ProductLayout } from '../../../../components/products/ProductLayout';
import { LenceriaSidebar } from '../../../../components/lenceria/LenceriaSidebar';

const LenceriaBrand = ({ query }) => {
  const { brand } = query;
  console.log(brand.charAt(0).toUpperCase() + brand.slice(1));
  return (
    <ProductLayout>
      <LenceriaSidebar />
      <Brands marca={brand} page={Number(query.page) || 1} />
    </ProductLayout>
  );
};

export default LenceriaBrand;
