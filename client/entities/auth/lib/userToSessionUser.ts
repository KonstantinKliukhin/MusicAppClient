import User from '../../user/model/types/User';
import { SessionUser } from '../model';

export function userToSessionUser(user: User, token: string): SessionUser {
  return new SessionUser(String(user.id), user.email, user.name, token);
}
