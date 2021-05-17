import React from 'react';
import { Brands } from '../../../components/brands/Brands';
import { ProductLayout } from '../../../components/products/ProductLayout';
import { CorseteriaSidebar } from '../../../components/corseteria/CorseteriaSidebar';

const CorseteriaBrand = ({ query }) => {
  const { brand, page } = query;
  console.log(brand.charAt(0).toUpperCase() + brand.slice(1));
  return (
    <ProductLayout>
      <CorseteriaSidebar />
      <Brands marca={brand} page={Number(query.page) || 1} />
    </ProductLayout>
  );
};

export default CorseteriaBrand;
