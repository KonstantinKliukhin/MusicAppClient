import UserResponseDto from '@entities/user/dto/userResponse.dto';
import User from '@entities/user/user';

export default function jsonToUser(json: UserResponseDto) {
  return new User(json.id, json.email, json.name);
}
