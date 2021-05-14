import React from 'react';
import { Header } from './layout/Header';
import styled, { createGlobalStyle } from 'styled-components';

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
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {

    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
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
      <Header />
      {children}
    </>
  );
};
