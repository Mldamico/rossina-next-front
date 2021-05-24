import React from 'react';
import styled from 'styled-components';

const SidebarStyles = styled.aside`
  .sidebar-path {
    margin-left: 2rem;
  }

  .sidebar-link {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;
export const SidebarLayout = ({ children }) => {
  return <SidebarStyles>{children}</SidebarStyles>;
};
