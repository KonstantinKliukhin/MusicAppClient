import { HTTP_METHODS_TYPE } from '@shared/api';
import { Track } from '../model';

export const addTrackListen = async (trackId: Track['id']) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/listen/${trackId}`, {
    method: HTTP_METHODS_TYPE.POST,
  });

  return res.json();
};
