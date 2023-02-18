'use client';

import React, { FC } from 'react';
import styles from './TextInput.module.scss';
import cs from 'classnames';
import withFormikTextInputHOC from '../../../../hocs/withFormikTextInputHOC';

type PropsType = {
  isError: boolean;
  error?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextInput: FC<PropsType> = ({ isError, error, ...inputProps }) => {
  return (
    <div className={styles.root}>
      <input {...inputProps} className={cs(styles.input, { [styles.inputError]: isError })} />
      {isError ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};

export const FormikTextInput = withFormikTextInputHOC(TextInput);

export default TextInput;
