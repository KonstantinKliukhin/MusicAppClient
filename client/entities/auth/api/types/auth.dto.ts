import UserResponseDto from '../../../user/api/types/userResponse.dto';

export type AuthDtoType = {
  token: string;
  user: UserResponseDto;
};
