import { enhancedFetch } from '@shared/api';
import { HTTP_METHODS_TYPE } from '@shared/api';
import { ROUTES } from '@shared/config';
import { Track } from '../model';

export const deleteOneTrack = (id: Track['id']) => {
  return enhancedFetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${id}`, {
    method: HTTP_METHODS_TYPE.DELETE,
    revalidate: [ROUTES.TRACKS_LIST],
  });
};
