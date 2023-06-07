'use client';

import { useField } from 'formik';
import React, { ComponentType, FC, useEffect } from 'react';

type TextInputProps = {
  value: File | null;
  setValue: (value: File | null) => void;
};

export const withFormikFileInputHOC = <PropsType extends object>(
  InputComponent: ComponentType<PropsType & TextInputProps>,
): FC<PropsType & { name: string }> =>
  function FormikFileInputComponent({ name, ...componentProps }) {
    const [field, meta, helpers] = useField(name);

    useEffect(function markTouched() {
      if (!field.value || meta.touched) return;
      helpers.setTouched(true);
    }, [field.value, meta.touched]);

    return (
      <InputComponent
        setValue={helpers.setValue}
        value={field.value}
        {...(componentProps as PropsType)}
      />
    );
  };
