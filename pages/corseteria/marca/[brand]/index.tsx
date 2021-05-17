import React from 'react';
import { ProductLayout } from '../../../../components/products/ProductLayout';
import { Corseteria } from '../../../../components/corseteria/Corseteria';
import { CorseteriaSidebar } from '../../../../components/corseteria/CorseteriaSidebar';
import { useRouter } from 'next/router';

const CorseteriaPage = () => {
  const { query } = useRouter();
  return (
    <ProductLayout>
      <CorseteriaSidebar />
      <Corseteria page={Number(query.page) || 1} />
    </ProductLayout>
  );
};

export default CorseteriaPage;
