import axios from 'axios';
import SignInCredentialsType from '@entities/auth/signIncredentials';
import jsonToUser from '@entities/user/adapters/jsonToUser';
import AuthDtoType from '@entities/auth/dto/auth.dto';

export default async function signIn(data: SignInCredentialsType) {
  const response = await axios.post<AuthDtoType>(
    `${process.env.NEXT_PUBLIC_API_PATH}/auth/sign-in`,
    data,
  );

  return {
    ...response.data,
    user: jsonToUser(response.data.user),
  };
}
