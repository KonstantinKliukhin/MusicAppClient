'use client';
import { Form, Formik } from 'formik';
import React, { FC, PropsWithChildren } from 'react';
import { signInFormInitialValues, signInValidationSchema, useSignInSubmit } from '../../model';
import styles from './SignInForm.module.scss';

export const SignInForm: FC<PropsWithChildren> = props => {
  const onSubmit = useSignInSubmit();
  return (
    <Formik
      initialValues={signInFormInitialValues}
      validationSchema={signInValidationSchema}
      validateOnMount={true}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>{props.children}</Form>
    </Formik>
  );
};
