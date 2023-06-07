import { HTTP_METHODS_TYPE } from '@shared/api';
import { jsonToSessionUser } from '../lib';
import { SignUpCredentialsType } from '../model';
import { AuthDtoType } from './types';

export async function signUp(signUpData: SignUpCredentialsType) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/auth/sign-up`, {
    body: JSON.stringify(signUpData),
    method: HTTP_METHODS_TYPE.POST,
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data: AuthDtoType = await response.json();

  return jsonToSessionUser(data);
}
