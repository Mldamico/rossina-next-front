import React from 'react';
import Link from 'next/link';
import { NavigationStyles } from './styles/NavegationStyles';

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
