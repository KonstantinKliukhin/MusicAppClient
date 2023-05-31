export class TrackComment {
  id: number;
  username: string;
  text: string;

  constructor(id: number, username: string, text: string) {
    this.id = id;
    this.username = username;
    this.text = text;
  }
}
