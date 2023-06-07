'use client';

import cs from 'classnames';
import React, { FC } from 'react';
import { withFormikTextInputHOC } from '../formikHOCs/withFormikTextInputHOC';
import styles from './TextInput.module.scss';

type PropsType = {
  isError: boolean;
  error?: string;
  label?: string;
  labelClassName?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextInput: FC<PropsType> = ({ isError, error, label, labelClassName, ...inputProps }) => {
  return (
    <div className={styles.root}>
      {label ? (
        <label htmlFor={inputProps.name} className={labelClassName}>
          {label}
        </label>
      ) : null}
      <input {...inputProps} className={cs(styles.input, { [styles.inputError]: isError })} />
      {isError ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};

export const FormikTextInput = withFormikTextInputHOC(TextInput);
