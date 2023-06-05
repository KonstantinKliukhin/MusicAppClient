'use client';
import { useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { signIn } from 'next-auth/react';
import * as Yup from 'yup';
import { SignInCredentialsType } from '../../../../entities/auth';
import { ROUTES } from '../../../../../routes';

export const signInFormInitialValues = {
  email: '',
  password: '',
} satisfies SignInCredentialsType;

export const signInValidationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
})

export const useCallbackURL = (): string => {
  const params = useSearchParams();

  return useMemo(() => params?.get('callbackUrl') || ROUTES.TRACKS_LIST, [params]);
};

export const useSignInSubmit = () => {
  const callbackUrl = useCallbackURL();

  return useCallback((values: SignInCredentialsType) => {
    signIn('credentials', {
      ...values,
      redirect: true,
      callbackUrl: callbackUrl,
    });
  }, [callbackUrl]);
};