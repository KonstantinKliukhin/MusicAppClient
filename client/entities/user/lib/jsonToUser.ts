import { UserResponseDtoType } from '../api';
import { User } from '../model';

export function jsonToUser(json: UserResponseDtoType): User {
  return new User(json.id, json.email, json.name);
}
