import React from 'react';
import Link from 'next/link';
import { NavigationStyles } from './styles/NavegationStyles';

export const Navegation = () => {
  return (
    <>
      <NavigationStyles>
        <Link href='/'>Home</Link>
        <Link href='/productos'>Productos</Link>
        <Link href='/corseteria'>Corseteria</Link>
        <Link href='/lenceria'>Lenceria</Link>
        <Link href='/productos'>Maternal</Link>
      </NavigationStyles>
    </>
  );
};
