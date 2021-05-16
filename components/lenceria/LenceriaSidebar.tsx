import Link from 'next/link';
import React from 'react';
import { SidebarLayout } from '../layout/SidebarLayout';

export const LenceriaSidebar = () => {
  return (
    <SidebarLayout>
      <div className='sidebar-path'>
        <Link href='/'>Home</Link> / PRODUCTOS
      </div>
      <h3>PRODUCTOS</h3>
      <div className='sidebar-link'>
        <Link href='/lenceria'>VER TODO</Link>
        <Link href='/lenceria/arlen'>Arlen</Link>
        <Link href='/lenceria/delledonne'>Delledonne</Link>
        <Link href='/lenceria/promesse'>Promesse</Link>
        <Link href='/lenceria/puedo-querer'>Puedo Querer</Link>
        <Link href='/lenceria/susurro'>Susurro</Link>
      </div>
    </SidebarLayout>
  );
};
