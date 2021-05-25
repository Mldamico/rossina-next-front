import React from 'react';
import styled from 'styled-components';
import {
  Product as productType,
  useProductsPerPageQuery,
} from '../../types/generated-queries';

import { Product } from './Product';
import { LoadingSpinner } from '../layout/LoadingSpinner';
import { perPage } from '../../config';
import { ProductsContainer } from '../layout/ProductsContainer';
import { useRouter } from 'next/router';

const ProductsStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 5rem;
  @media (max-width: 500px) {
    grid-template-columns: 300px;
    justify-content: center;
    img {
      width: 30rem;
    }
  }
`;

export const Products = ({ page }) => {
  const router = useRouter();
  const { data, error, loading } = useProductsPerPageQuery({
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      ...router.query,
    },
  });

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <ProductsContainer page={page}>
        <ProductsStyles>
          {data?.allProducts?.map((product: productType) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsStyles>
      </ProductsContainer>
    </>
  );
};
