'use client';

import { Form, Formik } from 'formik';
import React, { FC, PropsWithChildren } from 'react';
import { signUpFormInitialValues, signUpValidationSchema, useSignInSubmit } from '../../model';
import styles from './SignUpForm.module.scss';

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
