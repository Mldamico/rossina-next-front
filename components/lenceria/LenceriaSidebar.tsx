import Link from 'next/link';
import React from 'react';
import { SidebarLayout } from '../layout/SidebarLayout';

export const LenceriaSidebar = () => {
  return (
    <SidebarLayout>
      <div className='sidebar-path'>
        <Link href='/'>Home</Link> / LENCERIA
      </div>
      <h3>PRODUCTOS</h3>
      <div className='sidebar-link'>
        <Link href='/lenceria'>VER TODO</Link>
        <Link href='/lenceria/marca/arlen'>Arlen</Link>
        <Link href='/lenceria/marca/delledonne'>Delledonne</Link>
        <Link href='/lenceria/marca/promesse'>Promesse</Link>
        <Link href='/lenceria/marca/puedo-querer'>Puedo Querer</Link>
        <Link href='/lenceria/marca/susurro'>Susurro</Link>
      </div>
    </SidebarLayout>
  );
};
