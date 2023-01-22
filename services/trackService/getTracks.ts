import axios from "axios";
import {IGetTrackDTO} from "../../types/entities/track/dto/GetTrack.dto";
import TrackAdapter from "../../types/entities/track/adapters/TrackAdapter";
import TrackCommentAdapter from '@entities/track/adapters/TrackCommentAdapter'
import UrlParser from '../../utils/UrlParser'


const getTracks = async () => {
    const response = await axios.get<IGetTrackDTO[]>(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`);

    return response.data.map(track => new TrackAdapter(track, TrackCommentAdapter, UrlParser));
}

export default getTracks;