import {ITrackComment} from "../TrackComment";
import {ITrackCommentDTO} from "../dto/TrackComment.dto";

class TrackCommentAdapter implements ITrackComment {
    id: string
    username: string
    text: string

    constructor(dto: ITrackCommentDTO) {
        this.id = dto._id;
        this.username = dto.username;
        this.text = dto.text;
    }
}

export default TrackCommentAdapter;