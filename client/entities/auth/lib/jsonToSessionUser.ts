import { AuthDtoType } from '../api';
import { SessionUser } from '../model';

export function jsonToSessionUser(json: AuthDtoType): SessionUser {
  return new SessionUser(String(json.user.id), json.user.email, json.user.name, json.token);
}
