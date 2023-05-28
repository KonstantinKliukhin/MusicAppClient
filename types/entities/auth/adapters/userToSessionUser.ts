import User from '@entities/user/user';
import SessionUser from '@entities/auth/SessionUser';

export default function userToSessionUser(user: User, token: string): SessionUser {
  return new SessionUser(String(user.id), user.email, user.name, token);
}
