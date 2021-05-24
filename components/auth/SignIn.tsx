import React, { SyntheticEvent } from 'react';
import { useForm } from '../../lib/useForm';
import {
  refetchCurrentUserQuery,
  useSignInMutation,
  useSignUpMutation,
} from '../../types/generated-queries';
import DisplayError from '../ErrorMessage';
import Form from './styles/Form';

export const SignIn = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [signIn, { data, loading }] = useSignInMutation({
    variables: {
      email: inputs.email,
      password: inputs.password,
    },
    refetchQueries: [refetchCurrentUserQuery()],
  });

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    console.log(inputs);
    await signIn();
    resetForm();
  }

  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <Form method='POST' onSubmit={handleSubmit}>
      <h2>Entrar</h2>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor='email'>
          Email
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Direccion de email'
            autoComplete='email'
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Entrar</button>
      </fieldset>
    </Form>
  );
};
