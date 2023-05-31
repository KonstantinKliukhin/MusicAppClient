import UserResponseDto from '../api/types/userResponse.dto';
import User from '../model/types/User';

export default function jsonToUser(json: UserResponseDto) {
  return new User(json.id, json.email, json.name);
}
