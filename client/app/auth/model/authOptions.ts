import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { ROUTES } from '../../../../routes';
import { signIn, SignInCredentialsType, userToSessionUser } from '../../../entities/auth';

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
          const data = await signIn(credentials);

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

export const authOptions = NextAuth(options);