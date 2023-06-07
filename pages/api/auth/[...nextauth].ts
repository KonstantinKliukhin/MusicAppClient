// export { authConfig as default } from '../../../client/app';
// export const runtime = 'nodejs';

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { SignInCredentialsType } from '@entities/auth';
import { signIn } from '@entities/auth/api';
import { ROUTES } from '@shared/config';

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: {
          label: 'Username',
          type: 'text',
          placeholder: 'jsmith',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials: SignInCredentialsType | undefined) {
        if (!credentials) return null;

        try {
          return await signIn(credentials);
        } catch (e) {
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: ROUTES.SIGN_IN,
    newUser: ROUTES.SIGN_UP,
  },
};

export default NextAuth(options);
