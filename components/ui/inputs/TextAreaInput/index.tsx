'use client';

import React, { FC } from 'react';
import styles from './TextAreaInput.module.scss';
import cs from 'classnames';
import withFormikTextInputHOC from '../../../../hocs/withFormikTextInputHOC';

type PropsType = {
  isError: boolean;
  error?: string;
  label?: string;
  labelClassName?: string;
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

const TextAreaInput: FC<PropsType> = ({ isError, error, label, labelClassName, ...inputProps }) => {
  return (
    <div className={styles.root}>
      {label ? (
        <label htmlFor={inputProps.name} className={labelClassName}>
          {label}
        </label>
      ) : null}
      <textarea {...inputProps} className={cs(styles.input, { [styles.inputError]: isError })} />
      {isError ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};

export const FormikTextAreaInput = withFormikTextInputHOC(TextAreaInput);

export default TextAreaInput;
