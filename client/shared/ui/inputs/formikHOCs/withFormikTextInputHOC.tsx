'use client';

import { useField } from 'formik';
import React, { ComponentType, FC } from 'react';

type TextInputProps = {
  error?: string;
  isError: boolean;
} & object;

export const withFormikTextInputHOC = <PropsType extends TextInputProps>(
  InputComponent: ComponentType<PropsType>,
): FC<Omit<PropsType, 'error' | 'isError'> & { name: string }> =>
  function FormikTextInputComponent({ name, ...componentProps }) {
    const [field, meta] = useField(name);

    return (
      <InputComponent
        {...field}
        {...(componentProps as PropsType)}
        error={meta.error}
        isError={Boolean(meta.touched && meta.error)}
      />
    );
  };
