import React from 'react';
import styled from 'styled-components';
import {
  useAllLenceriaQuery,
  useProductsPerPageQuery,
} from '../../types/generated-queries';
import { Product } from '../products/Product';
import { LoadingSpinner } from '../layout/LoadingSpinner';
import { perPage } from '../../config';
import { ProductsContainer } from '../layout/ProductsContainer';
const ProductsStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 5rem;
`;

export const Lenceria = ({ page }) => {
  const { data, error, loading } = useProductsPerPageQuery({
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      tipoDePrenda: 'Lenceria',
    },
  });

  if (loading) return <LoadingSpinner />;
  return (
    <ProductsContainer page={page} tipoDePrenda='Lenceria'>
      <ProductsStyles>
        {data?.allProducts?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsStyles>
    </ProductsContainer>
  );
};
