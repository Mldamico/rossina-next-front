import React from 'react';
import Link from 'next/link';
import { NavigationStyles } from './styles/NavegationStyles';

export const Navegation = () => {
  return (
    <>
      <NavigationStyles>
        <Link href='/'>Home</Link>
        <Link href='/productos'>Productos</Link>
        <Link
          href={{
            pathname: '/productos',
            query: { tipoDePrenda: 'Corseteria' },
          }}
        >
          Corseteria
        </Link>
        <Link
          href={{ pathname: '/productos', query: { tipoDePrenda: 'Lenceria' } }}
        >
          Lenceria
        </Link>
        <Link href='/productos'>Maternal</Link>
      </NavigationStyles>
    </>
  );
};
