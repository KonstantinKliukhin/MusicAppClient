import { TrackComment } from '../../../trackComment';

export class Track {
  constructor(
    public id: number,
    public name: string,
    public artist: string,
    public text: string,
    public listens: number,
    public picture: string,
    public audio: string,
    public comments: TrackComment[],
    public createdAt: string,
    public updatedAt: string,
  ) {}
}
