import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import SignInCredentialsType from '../../../../src/entities/auth/model/types/signIncredentials';
import userService from '@services/userService';
import userToSessionUser from '../../../../src/entities/auth/lib/userToSessionUser';

export const authOptions: NextAuthOptions = {
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
          const data = await userService.signIn(credentials);

          return userToSessionUser(data.user, data.token);
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

export default NextAuth(authOptions);
