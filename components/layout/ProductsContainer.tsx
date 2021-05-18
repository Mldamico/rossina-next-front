import React from 'react';
import styled from 'styled-components';
import { Pagination } from './Pagination';

const ProductsContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductsContainer = ({
  children,
  page,
  filtros,
}: {
  children: any;
  page: number;
  filtros?: { tipoDePrenda?: string; marca?: string };
}) => {
  return (
    <ProductsContainerStyles>
      <Pagination page={Number(page) || 1} />
      {children}
      <Pagination page={Number(page) || 1} />
    </ProductsContainerStyles>
  );
};
