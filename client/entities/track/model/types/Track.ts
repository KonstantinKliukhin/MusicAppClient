import { TrackComment } from '@entities/track';

export class Track {
  constructor(
    public id: number,
    public name: string,
    public artist: string,
    public text: string,
    public listens: number,
    public picture: Url,
    public audio: Url,
    public comments: TrackComment[],
    public createdAt: StringDate,
    public updatedAt: StringDate,
  ) {}
}
