'use client';

import { useField } from 'formik';
import React, { ComponentType, FC } from 'react';

type TextInputProps = {
  isError: boolean;
  error?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const withFormikTextInputHOC = <PropsType extends object>(
  InputComponent: ComponentType<PropsType & TextInputProps>,
): FC<PropsType & { name: string }> =>
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

export default withFormikTextInputHOC;
