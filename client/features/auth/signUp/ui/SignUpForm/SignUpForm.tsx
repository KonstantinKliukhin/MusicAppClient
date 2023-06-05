'use client';

import React, { FC, PropsWithChildren } from 'react';
import { Form, Formik } from 'formik';
import styles from './SignUpForm.module.scss';
import { signUpFormInitialValues, signUpValidationSchema, useSignInSubmit } from '../../model';

export const SignUpForm: FC<PropsWithChildren> = props => {
  const onSubmit = useSignInSubmit();
  return (
    <Formik
      initialValues={signUpFormInitialValues}
      validationSchema={signUpValidationSchema}
      validateOnMount={true}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>{props.children}</Form>
    </Formik>
  );
};
