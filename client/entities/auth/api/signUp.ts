import jsonToUser from '../../user/lib/jsonToUser';
import { AuthDtoType } from './types';
import { HTTP_METHODS_TYPE } from '@commonTypes/HttpMethods';
import { SignUpCredentialsType } from '../model';

export async function signUp(signUpData: SignUpCredentialsType) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/auth/sign-up`, {
    body: JSON.stringify(signUpData),
    method: HTTP_METHODS_TYPE.POST,
  });

  const data: AuthDtoType = await response.json();

  return {
    ...data,
    user: jsonToUser(data.user),
  };
}
