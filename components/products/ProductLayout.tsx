import React from 'react';
import styled from 'styled-components';

const ProductPageStyles = styled.div`
  display: grid;
  margin: 5rem;
  grid-template-columns: minmax(150px, 250px) 1fr;
  grid-gap: 3rem;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const ProductLayout = ({ children }) => {
  return <ProductPageStyles>{children}</ProductPageStyles>;
};
