export class User {
  constructor(
    public id: string,
    public email: string,
    public name: string,
    public avatar: Url | null,
  ) {}

  get initials(): [string, string] {
    return this.name.slice(0, 2).toUpperCase().split('') as [string, string];
  }
}
