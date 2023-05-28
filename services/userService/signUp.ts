import axios from 'axios';
import jsonToUser from '@entities/user/adapters/jsonToUser';
import AuthDtoType from '@entities/auth/dto/auth.dto';
import SignUpCredentialsType from '@entities/auth/signUpCredentials';

export default async function signUp(data: SignUpCredentialsType) {
  const response = await axios.post<AuthDtoType>(
    `${process.env.NEXT_PUBLIC_API_PATH}/auth/sign-up`,
    data,
  );

  return {
    ...response.data,
    user: jsonToUser(response.data.user),
  };
}
