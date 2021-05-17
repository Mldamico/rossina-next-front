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
        <Link href='/arlen'>Arlen</Link>
        <Link href='/delledonne'>Delledonne</Link>
        <Link href='/promesse'>Promesse</Link>
        <Link href='/puedo-querer'>Puedo Querer</Link>
        <Link href='/susurro'>Susurro</Link>
      </div>
    </SidebarLayout>
  );
};
