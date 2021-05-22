import React from 'react';
import { useForm } from '../../lib/useForm';
import { useRedeemPasswordResetMutation } from '../../types/generated-queries';
import Form from './styles/Form';

export const Reset = ({ token }: { token: string }) => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });
  const [reset, { data, loading, error }] = useRedeemPasswordResetMutation({
    variables: {
      email: inputs.email,
      password: inputs.password,
      token: inputs.token,
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await reset().catch(console.error);
    console.log(data);
    resetForm();
  };
  return (
    <Form method='POST'>
      <fieldset>
        {data?.redeemUserPasswordResetToken === null && (
          <p>Ahora podes entrar!</p>
        )}
        <label htmlFor='email'>
          Email
          <input
            type='email'
            name='email'
            autoComplete='email'
            placeholder='Direccion de email'
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            type='password'
            name='password'
            autoComplete='password'
            placeholder='Password'
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type='submit' onClick={handleSubmit}>
          Modificar Contraseña
        </button>
      </fieldset>
    </Form>
  );
};
