import { useSession } from 'next-auth/react';
import { GetCurrentUserDtoType } from '../api';
import { jsonToUser } from '../lib';
import { User } from '../model';

export const useUser = (): null | User => {
  const user = useSession().data?.user as GetCurrentUserDtoType & Record<string, string>;

  if (!user) return null;

  return jsonToUser(user);
};
