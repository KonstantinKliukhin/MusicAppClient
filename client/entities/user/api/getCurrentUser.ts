import { jsonToUser } from '../lib';
import { User } from '../model';
import { GetCurrentUserDtoType } from './types/getCurrentUser.dto';

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/user`);

    const dto: GetCurrentUserDtoType = await response.json();

    return jsonToUser(dto);
  } catch (e) {
    return null;
  }
};
