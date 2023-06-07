import { HTTP_METHODS_TYPE } from '@shared/api';
import { jsonToSessionUser } from '../lib';
import { SignInCredentialsType } from '../model';
import { AuthDtoType } from './types';

export async function signIn(signInData: SignInCredentialsType) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/auth/sign-in`, {
    body: JSON.stringify(signInData),
    method: HTTP_METHODS_TYPE.POST,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data: AuthDtoType = await response.json();

  return jsonToSessionUser(data);
}
