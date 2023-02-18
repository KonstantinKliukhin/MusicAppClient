'use client';

import React, { FC } from 'react';
import styles from './TextAreaInput.module.scss';
import cs from 'classnames';
import withFormikTextInputHOC from '../../../../hocs/withFormikTextInputHOC';
import TextInput from '@uiComponents/inputs/TextInput';

type PropsType = {
  isError: boolean;
  error?: string;
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

const TextAreaInput: FC<PropsType> = ({ isError, error, ...inputProps }) => {
  return (
    <div className={styles.root}>
      <textarea {...inputProps} className={cs(styles.input, { [styles.inputError]: isError })} />
      {isError ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};

export const FormikTextAreaInput = withFormikTextInputHOC(TextInput);

export default TextAreaInput;
