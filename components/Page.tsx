import React from 'react';
import { Header } from './header/Header';
import styled, { createGlobalStyle } from 'styled-components';
import { Footer } from './footer/Footer';

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const GlobalStyles = createGlobalStyle`
  html {
    --red: #ff3744;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(---lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Old Standard TT', serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
    background-color: #fff;
    min-height: 100%;

  }
  a {
    text-decoration: none;
    color: var(---black);
  }
 

`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Page = ({ children }: Props) => {
  return (
    <>
      <GlobalStyles />
      <WrapperStyle>
        <Header />
        {children}
      </WrapperStyle>

      <Footer />
    </>
  );
};
