import React, { SyntheticEvent } from 'react';
import { useForm } from '../../lib/useForm';
import { useSignUpMutation } from '../../types/generated-queries';
import Form from './styles/Form';

export const SignUp = () => {
  const { inputs, handleChange, resetForm } = useForm({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    telefono: '',
  });

  const [signUp, { data, loading, error }] = useSignUpMutation({
    variables: {
      nombre: inputs.nombre,
      apellido: inputs.apellido,
      telefono: inputs.telefono,
      email: inputs.email,
      password: inputs.password,
    },
  });

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await signUp();
    resetForm();
  }

  return (
    <Form method='POST' onSubmit={handleSubmit}>
      <h2>Registrarse</h2>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor='nombre'>
          Nombre
          <input
            type='text'
            name='nombre'
            id='nombre'
            placeholder='Nombre'
            autoComplete='name'
            value={inputs.nombre}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='apellido'>
          Apellido
          <input
            type='text'
            name='apellido'
            id='apellido'
            placeholder='Apellido'
            autoComplete='name'
            value={inputs.apellido}
            onChange={handleChange}
          />
        </label>
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
        <label htmlFor='telefono'>
          Telefono
          <input
            type='text'
            name='telefono'
            id='telefono'
            placeholder='Telefono (opcional)'
            autoComplete='name'
            value={inputs.telefono}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Registrarse</button>
      </fieldset>
    </Form>
  );
};
