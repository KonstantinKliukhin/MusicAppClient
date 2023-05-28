'use client';

import React, { FC, PropsWithChildren, useCallback } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import SignInCredentialsType from '@entities/auth/signIncredentials';
import { signIn } from 'next-auth/react';
import styles from './signInFormik.module.scss';
import useCallbackUrl from '@hooks/useCallbackUrl';

const initialValues = {
  email: '',
  password: '',
} satisfies SignInCredentialsType;

const SignInFormik: FC<PropsWithChildren> = (props) => {
  const callbackUrl = useCallbackUrl();

  const onSubmit = useCallback(
    (values: SignInCredentialsType) =>
      signIn('credentials', {
        ...values,
        redirect: true,
        callbackUrl: callbackUrl,
      }),
    [callbackUrl],
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      })}
      validateOnMount={true}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>{props.children}</Form>
    </Formik>
  );
};

export default SignInFormik;
