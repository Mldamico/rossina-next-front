import React from 'react';
import Link from 'next/link';
import { SidebarLayout } from '../layout/SidebarLayout';

export const Sidebar = () => {
  return (
    <SidebarLayout>
      <div className='sidebar-path'>
        <Link href='/'>Home</Link> / PRODUCTOS
      </div>
      <h3>PRODUCTOS</h3>
      <div className='sidebar-link'>
        <Link href='/productos'>VER TODO</Link>
        <Link href='/corseteria'>CORSETERIA</Link>
        <Link href='/lenceria'>LENCERIA</Link>
        <Link href='/productos'>MATERNAL</Link>
        <Link href='/productos'>HOMBRES</Link>
        <Link href='/productos'>MEDIAS</Link>
      </div>
    </SidebarLayout>
  );
};
