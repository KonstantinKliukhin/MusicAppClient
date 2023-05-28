import UserResponseDto from '@entities/user/dto/userResponse.dto';

type AuthDtoType = {
  token: string;
  user: UserResponseDto;
};

export default AuthDtoType;
