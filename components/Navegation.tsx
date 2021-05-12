import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavigationStyles = styled.nav`
  font-size: 1.8rem;
  /* width: 100%; */
  display: flex;
  justify-content: center;

  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    &:not(:first-child):before {
      content: '';
      width: 2px;
      background: #fff;
      height: 50%;
      left: 0;
      position: absolute;
      transform: skew(-20deg) translateY(50%);
      top: 0;
      bottom: 0;
      /* transform: translateX(50%); */
    }
  }

  @media (max-width: 700px) {
    a,
    button {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;

    a,
    button {
      /* padding: 1rem 3rem; */
      font-size: 1rem;
      &:not(:first-child):before {
        width: 0px;
        /* transform: translateX(50%); */
      }
    }
  }
`;

export const Navegation = () => {
  return (
    <>
      <NavigationStyles>
        <Link href='/'>Home</Link>
        <Link href='/productos'>Productos</Link>
        <Link href='/productos'>Corseteria</Link>
        <Link href='/productos'>Lenceria</Link>
        <Link href='/productos'>Maternal</Link>
      </NavigationStyles>
    </>
  );
};
