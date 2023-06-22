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
            type: 'text',
          },
          password: {
            type: 'password',
          },
        },
        authorize,
      }),
    ],

    callbacks: {
      jwt({ token, user }) {
        return { ...token, ...user };
      },
      session({ session, token }) {
        session.user = { ...token };

        return session;
      },
    },

    session: {
      strategy: 'jwt',
    },

    pages: {
      signIn: ROUTES.SIGN_IN,
      newUser: ROUTES.SIGN_UP,
    },
  });
}
