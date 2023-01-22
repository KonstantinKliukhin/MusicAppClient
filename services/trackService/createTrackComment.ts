import axios from 'axios'
import { ITrackCommentDTO } from '../../types/entities/track/dto/TrackComment.dto'
import { ICreateCommentDto } from '../../types/entities/track/dto/CreateComment.dto'

const createTrackComment = async (comment: ICreateCommentDto) => {
  await axios.post<ITrackCommentDTO[]>(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`, comment)
}

export default createTrackComment