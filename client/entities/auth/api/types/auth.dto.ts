export type AuthDtoType = {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
};
