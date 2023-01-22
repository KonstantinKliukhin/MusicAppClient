import axios from "axios";
import {IGetTrackDTO} from "../../types/entities/track/dto/GetTrack.dto";
import { ICreateTrackDto } from '../../types/entities/track/dto/CreateTrack.dto'


const createTrack = async (track: ICreateTrackDto): Promise<void> => {
  await axios.post<IGetTrackDTO[]>(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`, track);
}

export default createTrack;