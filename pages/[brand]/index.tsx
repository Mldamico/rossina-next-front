import React from 'react';
import { LenceriaByBrand } from '../../components/lenceria/LenceriaByBrand';
import { LenceriaSidebar } from '../../components/lenceria/LenceriaSidebar';
import { ProductLayout } from '../../components/products/ProductLayout';

const LenceriaBrand = ({ query }) => {
  const { brand, page } = query;
  console.log(brand.charAt(0).toUpperCase() + brand.slice(1));
  return (
    <ProductLayout>
      <LenceriaSidebar />
      <LenceriaByBrand marca={brand} page={Number(query.page) || 1} />
    </ProductLayout>
  );
};

export default LenceriaBrand;
