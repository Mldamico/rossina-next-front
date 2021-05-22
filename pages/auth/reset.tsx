import React from 'react';
import { Reset } from '../../components/auth/Reset';
import { ResetPassword } from '../../components/auth/ResetPassword';

const ResetPage = ({ query }: { query: { token: string } }) => {
  if (!query?.token) {
    return (
      <div>
        <p>Sorry, you must supply a token</p>
        <ResetPassword />
      </div>
    );
  }
  return (
    <div>
      <Reset token={query.token} />
    </div>
  );
};

export default ResetPage;
