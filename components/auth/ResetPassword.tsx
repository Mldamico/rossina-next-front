import React, { SyntheticEvent } from 'react';
import { useForm } from '../../lib/useForm';
import { useRequestResetMutation } from '../../types/generated-queries';
import DisplayError from '../ErrorMessage';
import Form from './styles/Form';

export const ResetPassword = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [resetPassword, { data, loading, error }] = useRequestResetMutation({
    variables: {
      email: inputs.email,
    },
  });

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await resetPassword();
    resetForm();
  }

  return (
    <Form method='POST' onSubmit={handleSubmit}>
      <h2>Recuperar Contraseña</h2>
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

        <button type='submit'>Recuperar</button>
      </fieldset>
    </Form>
  );
};
