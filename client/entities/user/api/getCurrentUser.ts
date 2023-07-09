import { protectedFetch, ServerErrorType } from '@shared/api';
import { envConfig } from '@shared/config';
import { jsonToUser } from '../lib';
import { User } from '../model';
import { GetCurrentUserDtoType } from './types/getCurrentUser.dto';

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const response = await protectedFetch(`${envConfig.NEXT_PUBLIC_API_PATH}/user`);

    const dto: GetCurrentUserDtoType | ServerErrorType = await response.json();

    if ('error' in dto) throw dto;

    return jsonToUser(dto);
  } catch (e) {
    return null;
  }
};
