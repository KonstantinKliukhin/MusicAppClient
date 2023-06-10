import { GetCurrentUserDtoType } from '../api';
import { User } from '../model';

export function jsonToUser(json: GetCurrentUserDtoType): User {
  return new User(json.id, json.email, json.name, json.avatar);
}
