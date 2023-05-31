'use client';

import { useField } from 'formik';
import React, { ComponentType, FC } from 'react';

type TextInputProps = {
  value: File | null;
  setValue: (value: File | null) => void;
};

const withFormikFileInputHOC = <PropsType extends object>(
  InputComponent: ComponentType<PropsType & TextInputProps>,
): FC<PropsType & { name: string }> =>
  function FormikFileInputComponent({ name, ...componentProps }) {
    const [field, _meta, helpers] = useField(name);

    return (
      <InputComponent
        setValue={helpers.setValue}
        value={field.value}
        {...(componentProps as PropsType)}
      />
    );
  };

export default withFormikFileInputHOC;
