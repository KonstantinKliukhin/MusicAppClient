import { Track } from '@entities/track/Track';
import jsonToTrack from '@entities/track/adapters/jsonToTrack';
import urlParser from '../../shared/utils/UrlParser';
import { IGetTrackDTO } from '@entities/track/dto/GetTrack.dto';

const getOneTrack = async (id: Track['id']): Promise<Track> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${id}`, {
    next: {
      tags: [''],
    },
  });

  const dto: IGetTrackDTO = await response.json();

  return jsonToTrack(dto, urlParser);
};

export default getOneTrack;
