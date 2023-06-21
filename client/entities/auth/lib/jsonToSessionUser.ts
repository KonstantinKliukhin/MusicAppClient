import { AuthDtoType } from '../api';
import { SessionUser } from '../model';

export const jsonToSessionUser = (json: AuthDtoType): SessionUser => {
  return { ...json, id: String(json.id) };
};
