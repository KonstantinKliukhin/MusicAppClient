import { SignInCredentialsType } from '@entities/auth';
import { setupAuthConfig } from '@shared/config';
import { signIn } from '../api';

export const authConfig = setupAuthConfig(async function authorize(params) {
  const credentials = params as SignInCredentialsType | undefined;
  if (!credentials) return null;

  try {
    return await signIn(credentials);
  } catch (e) {
    return null;
  }
});
