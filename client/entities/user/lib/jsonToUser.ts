import { urlParser } from '@shared/lib';
import { GetCurrentUserDtoType } from '../api';
import { User } from '../model';

export function jsonToUser(json: GetCurrentUserDtoType): User {
  return new User(
    String(json.id),
    json.email,
    json.name,
    json.avatar ? urlParser.getUrl(json.avatar) : null,
  );
}
