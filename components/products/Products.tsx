import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  Product as productType,
  useAllProductsQuery,
} from '../../types/generated-queries';
import { Product } from './Product';
const ProductsStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 5rem;
`;

export const Products = () => {
  const { data, error, loading } = useAllProductsQuery();

  if (loading) return <p>Cargando...</p>;
  return (
    <ProductsStyles>
      {data?.allProducts?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsStyles>
  );
};
