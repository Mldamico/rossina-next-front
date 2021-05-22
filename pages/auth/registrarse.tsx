import React from 'react';
import { SignUp } from '../../components/auth/SignUp';
import styled from 'styled-components';
import { SignIn } from '../../components/auth/SignIn';
import { ResetPassword } from '../../components/auth/ResetPassword';
const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const RegistrarsePage = () => {
  return (
    <GridStyles>
      <SignUp />
      <div>
        <SignIn />
        <ResetPassword />
      </div>
    </GridStyles>
  );
};

export default RegistrarsePage;
