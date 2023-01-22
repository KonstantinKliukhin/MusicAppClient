import {ITrack} from '@entities/track/Track';
import TrackAdapter from "../../types/entities/track/adapters/TrackAdapter";
import {IGetTrackDTO} from '@entities/track/dto/GetTrack.dto';
import axios from "axios";
import TrackCommentAdapter from '../../types/entities/track/adapters/TrackCommentAdapter'
import UrlParser from '../../utils/UrlParser'

const getOneTrack = async (id: ITrack['id']): Promise<ITrack> => {
    const response = await axios.get<IGetTrackDTO>(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${id}`);

    return new TrackAdapter(response.data, TrackCommentAdapter, UrlParser);
}

export default getOneTrack;