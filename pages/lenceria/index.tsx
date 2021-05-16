import React from 'react';
import { ProductLayout } from '../../components/products/ProductLayout';
import { Lenceria } from '../../components/lenceria/Lenceria';
import { LenceriaSidebar } from '../../components/lenceria/LenceriaSidebar';
import { useRouter } from 'next/router';

const LenceriaPage = () => {
  const { query } = useRouter();
  return (
    <ProductLayout>
      <LenceriaSidebar />
      <Lenceria page={Number(query.page) || 1} />
    </ProductLayout>
  );
};

export default LenceriaPage;
