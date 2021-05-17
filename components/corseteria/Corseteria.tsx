import React from 'react';
import styled from 'styled-components';
import { perPage } from '../../config';
import {
  useProductsPerPageQuery,
} from '../../types/generated-queries';
import { ProductsContainer } from '../layout/ProductsContainer';
import { Product } from '../products/Product';
const ProductsStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 5rem;
`;

export const Corseteria = ({ page }) => {
  const { data, error, loading } = useProductsPerPageQuery({
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      tipoDePrenda: 'Corseteria',
    },
  });
  console.log(error);
  if (loading) return <p>Cargando...</p>;
  return (
    <ProductsContainer page={page} tipoDePrenda='Corseteria'>
      <ProductsStyles>
        {data?.allProducts?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsStyles>
    </ProductsContainer>
  );
};
