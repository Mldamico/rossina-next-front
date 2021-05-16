import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  Product as productType,
  useAllProductsQuery,
  useProductsPerPageQuery,
} from '../../types/generated-queries';
import { Product } from './Product';
import { LoadingSpinner } from '../layout/LoadingSpinner';
import { Pagination } from '../layout/Pagination';
import { perPage } from '../../config';

const ProductsStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 5rem;
`;

const ProductsContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Products = ({ page }) => {
  const { data, error, loading } = useProductsPerPageQuery({
    variables: { skip: page * perPage - perPage, first: perPage },
  });

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <ProductsContainerStyles>
        <Pagination page={Number(page) || 1} />

        <ProductsStyles>
          {data?.allProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsStyles>
        <Pagination page={Number(page) || 1} />
      </ProductsContainerStyles>
    </>
  );
};
