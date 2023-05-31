import { Track } from '../model';
import { HTTP_METHODS_TYPE } from '@commonTypes/HttpMethods';

const addTrackListen = async (trackId: Track['id']) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/listen/${trackId}`, {
    method: HTTP_METHODS_TYPE.POST,
  });

  return res.json();
};

export default addTrackListen;
