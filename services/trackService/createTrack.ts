import { IGetTrackDTO } from '@entities/track/dto/GetTrack.dto';
import { ICreateTrackDto } from '@entities/track/dto/CreateTrack.dto';
import jsonToTrack from '@entities/track/adapters/jsonToTrack';
import { Track } from '@entities/track/Track';
import urlParser from '../../shared/utils/UrlParser';
import { HTTP_METHODS_TYPE } from '@commonTypes/HttpMethods';
import enhancedFetch from '@services/enhancedFecth';
import { ROUTES } from '../../routes';

const createTrack = async (track: ICreateTrackDto): Promise<Track> => {
  const formData = new FormData();

  Object.entries(track).forEach(([field, value]) => {
    formData.append(field, value);
  });

  const res = await enhancedFetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`, {
    method: HTTP_METHODS_TYPE.POST,
    body: formData,
    revalidate: [ROUTES.TRACKS_LIST],
  });

  const data: IGetTrackDTO = await res.json();

  return jsonToTrack(data, urlParser);
};

export default createTrack;
