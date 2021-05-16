import React from 'react';
import styled from 'styled-components';
import {
  useAllLenceriaQuery,
  useProductByBrandQuery,
} from '../../types/generated-queries';
import { Product } from '../products/Product';
import { LoadingSpinner } from '../layout/LoadingSpinner';
import { ProductsContainer } from '../layout/ProductsContainer';
const ProductsStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 5rem;
`;

export const LenceriaByBrand = ({
  marca,
  page,
}: {
  marca: string;
  page: number;
}) => {
  const { data, error, loading } = useProductByBrandQuery({
    variables: { marca },
  });

  console.log(data);

  const filtros = {
    marca,
  };

  if (loading) return <LoadingSpinner />;
  return (
    <ProductsContainer page={page} tipoDePrenda='Lenceria' filtros={filtros}>
      <ProductsStyles>
        {data?.allProducts?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsStyles>
    </ProductsContainer>
  );
};
