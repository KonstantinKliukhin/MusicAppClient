import {ITrackCommentDTO} from "./TrackComment.dto";

export interface IGetTrackDTO {
    _id: string
    name: string
    artist: string
    text: string
    listens: number
    picture: string
    audio: string
    comments: ITrackCommentDTO[]
}
