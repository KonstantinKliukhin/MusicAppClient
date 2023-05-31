import jsonToUser from '../../user/lib/jsonToUser';
import { AuthDtoType } from './types';
import { HTTP_METHODS_TYPE } from '@commonTypes/HttpMethods';
import { SignInCredentialsType } from '../model';

export async function signIn(signInData: SignInCredentialsType) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/auth/sign-in`, {
    body: JSON.stringify(signInData),
    method: HTTP_METHODS_TYPE.POST,
  });

  const data: AuthDtoType = await response.json();

  return {
    ...data,
    user: jsonToUser(data.user),
  };
}
