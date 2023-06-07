'use client';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useCallback, useMemo } from 'react';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { signUp, SignUpCredentialsType } from '@entities/auth';
import { ROUTES } from '@shared/config/routes';

YupPassword(Yup);

export const signUpFormInitialValues = {
  name: '',
  email: '',
  password: '',
} satisfies SignUpCredentialsType;

export const signUpValidationSchema = Yup.object({
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
});

const useCallbackURL = (): string => {
  const params = useSearchParams();

  return useMemo(() => params?.get('callbackUrl') || ROUTES.TRACKS_LIST, [params]);
};

export const useSignInSubmit = () => {
  const callbackUrl = useCallbackURL();

  return useCallback(
    (values: SignUpCredentialsType) => {
      // todo: add to nextauth functionality to detect type of credentials(sign-up | sign-in) and make only one request
      signUp(values).then(() =>
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
};