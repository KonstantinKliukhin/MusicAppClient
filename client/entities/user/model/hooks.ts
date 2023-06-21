import { useSession } from 'next-auth/react';
import { User } from '../model';

export const useUser = () => {
  const user = useSession().data?.user;

  if (!user) return null;
  // @ts-ignore
  return new User(user.id, user.email, user.name, user.avatar);
};
