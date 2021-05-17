import Link from 'next/link';
import React from 'react';
import { SidebarLayout } from '../layout/SidebarLayout';

export const CorseteriaSidebar = () => {
  return (
    <SidebarLayout>
      <div className='sidebar-path'>
        <Link href='/'>Home</Link> / CORSETERIA
      </div>
      <h3>PRODUCTOS</h3>
      <div className='sidebar-link'>
        <Link href='/corseteria'>VER TODO</Link>
        <Link href='/corseteria/deville'>Deville</Link>
        <Link href='/corseteria/mc-cartney'>Mc Cartney</Link>
        <Link href='/corseteria/perlea'>Perlea</Link>
        <Link href='/corseteria/peter-pan'>Peter Pan</Link>
        <Link href='/corseteria/selu'>Selu</Link>
      </div>
    </SidebarLayout>
  );
};
