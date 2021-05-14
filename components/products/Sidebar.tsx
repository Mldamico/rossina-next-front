import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
const SidebarStyles = styled.aside`
  .sidebar-path {
    margin-left: 2rem;
  }

  .sidebar-link {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
`;

export const Sidebar = () => {
  return (
    <SidebarStyles>
      <div className='sidebar-path'>
        <Link href='/'>Home</Link> / PRODUCTOS
      </div>
      <h3>PRODUCTOS</h3>
      <div className='sidebar-link'>
        <Link href='/productos'>VER TODO</Link>
        <Link href='/productos'>CORSETERIA</Link>
        <Link href='/productos'>LENCERIA</Link>
        <Link href='/productos'>MATERNAL</Link>
        <Link href='/productos'>HOMBRES</Link>
        <Link href='/productos'>MEDIAS</Link>
      </div>
    </SidebarStyles>
  );
};
