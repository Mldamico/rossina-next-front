import { ChangeEvent, useEffect, useState } from 'react';

type ProductInputs = {
  nombre?: string;
  articulo?: string;

  precio?: number;
  descripcion?: string;
  imagen?: File;
};

type UserInputs = {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
  apellido?: string;
  telefono?: string;
};

type Inputs = ProductInputs & UserInputs;

type InputTypes = {
  name: string;
  type: string;
  value: string | number | File;
};
export const useForm = (initial: Inputs) => {
  const [inputs, setInputs] = useState<Inputs>(initial);
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let { type, name, value }: InputTypes = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      {
        value = e.target.files[0];
      }
    }

    setInputs({ ...inputs, [name]: value });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState as Inputs);
  };

  return { inputs, handleChange, resetForm, clearForm };
};
