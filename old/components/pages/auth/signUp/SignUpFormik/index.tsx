'use client';

import React, { FC, PropsWithChildren, useCallback } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import styles from './signUpFormik.module.scss';
import SignUpCredentialsType from '../../../../../../src/entities/auth/model/types/signUpCredentials';
import userService from '@services/userService';
import useCallbackUrl from '../../../../../hooks/useCallbackUrl';
import { signIn } from 'next-auth/react';

YupPassword(Yup);

const initialValues = {
  name: '',
  email: '',
  password: '',
} satisfies SignUpCredentialsType;

const SignUpFormik: FC<PropsWithChildren> = (props) => {
  const callbackUrl = useCallbackUrl();

  const onSubmit = useCallback(
    (values: SignUpCredentialsType) => {
      // todo: add to nextauth functionality to detect type of credentials(sign-up | sign-in) and make only one request
      console.log('submit');
      userService.signUp(values).then(() =>
        signIn('credentials', {
          email: values.email,
          password: values.password,
          redirect: true,
          callbackUrl,
        }),
      );
    },
    [callbackUrl],
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string().min(3, 'name must contain 3 or more characters'),
        email: Yup.string().email().required(),
        password: Yup.string()
          .min(
            8,
            'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special',
          )
          .minLowercase(1, 'password must contain at least 1 lower case letter')
          .minUppercase(1, 'password must contain at least 1 upper case letter')
          .minNumbers(1, 'password must contain at least 1 number')
          .minSymbols(1, 'password must contain at least 1 special character'),
      })}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>{props.children}</Form>
    </Formik>
  );
};

export default SignUpFormik;
