import { SessionUser, signIn, SignInCredentialsType } from '@entities/auth';
import { setupAuthConfig } from '@shared/config';

export const authConfig = setupAuthConfig(async function authorize(
  params,
): Promise<SessionUser | null> {
  const credentials = params as SignInCredentialsType | undefined;
  if (!credentials) return null;

  try {
    return await signIn(credentials);
  } catch (e) {
    return null;
  }
});
