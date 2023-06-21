import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { ROUTES } from '@shared/config/routes';

export function setupAuthConfig(
  authorize: Parameters<typeof CredentialsProvider>[0]['authorize'],
): NextAuthOptions {
  return NextAuth({
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: {
            label: 'Email',
            type: 'text',
            placeholder: 'jsmith',
          },
          password: {
            label: 'Password',
            type: 'password',
          },
        },
        authorize,
      }),
    ],

    session: {
      strategy: 'jwt',
    },

    pages: {
      signIn: ROUTES.SIGN_IN,
      newUser: ROUTES.SIGN_UP,
    },
  });
}
