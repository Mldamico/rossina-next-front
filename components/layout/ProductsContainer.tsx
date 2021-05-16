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
  tipoDePrenda,
  filtros,
}: {
  children: any;
  page: number;
  tipoDePrenda?: string;
  filtros?: Object;
}) => {
  return (
    <ProductsContainerStyles>
      <Pagination
        page={Number(page) || 1}
        tipoDePrenda={tipoDePrenda}
        filtros={filtros}
      />
      {children}
      <Pagination page={Number(page) || 1} tipoDePrenda={tipoDePrenda} />
    </ProductsContainerStyles>
  );
};
