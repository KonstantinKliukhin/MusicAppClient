'use client';

import React, { FC } from 'react';
import { useField } from 'formik';
import styles from './FormikTexAreaInput.module.scss';
import cs from 'classnames';

type PropsType = {
  name: string;
};

const FormikTexAreaInput: FC<PropsType> = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className={styles.root}>
      <textarea
        {...field}
        className={cs(styles.input, { [styles.inputError]: !!meta.error?.length })}
      />
      {meta.touched && !!meta.error ? <p className={styles.error}>{meta.error}</p> : null}
    </div>
  );
};

export default FormikTexAreaInput;
