'use client';
import React, { FC, PropsWithChildren } from 'react';
import { Form, Formik } from 'formik';
import styles from './SignInForm.module.scss';
import { signInFormInitialValues, signInValidationSchema, useSignInSubmit } from '../../model';

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
