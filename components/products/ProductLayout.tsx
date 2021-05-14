import React from 'react';
import styled from 'styled-components';

const ProductPageStyles = styled.div`
  display: grid;
  margin: 5rem;
  grid-template-columns: minmax(150px, 250px) 1fr;
  grid-gap: 3rem;
`;

export const ProductLayout = ({ children }) => {
  return <ProductPageStyles>{children}</ProductPageStyles>;
};
