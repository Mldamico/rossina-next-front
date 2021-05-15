import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  useAllLenceriaQuery,
} from '../../types/generated-queries';
import { Product } from '../products/Product';
const ProductsStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 5rem;
`;

export const Lenceria = () => {
  const { data, error, loading } = useAllLenceriaQuery();

  if (loading) return <p>Cargando...</p>;
  return (
    <ProductsStyles>
      {data?.allProducts?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsStyles>
  );
};