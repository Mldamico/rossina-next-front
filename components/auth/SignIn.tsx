import React, { SyntheticEvent } from 'react';
import {useForm} from '../../lib/useForm';
import {
  useSignInMutation,
  useSignUpMutation,
} from '../../types/generated-queries';
import Form from './styles/Form';

export const SignIn = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [signIn, { data, loading, error }] = useSignInMutation({
    variables: {
      email: inputs.email,
      password: inputs.password,
    },
  });

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await signIn();
    resetForm();
  }

  return (
    <Form method='POST' onSubmit={handleSubmit}>
      <h2>Entrar</h2>
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
