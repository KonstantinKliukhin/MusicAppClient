import { Track } from '../model';
import { HTTP_METHODS_TYPE } from '@commonTypes/HttpMethods';
import { ROUTES } from '../../../../routes';
import { enhancedFetch } from '../../../shared/api';

const deleteOneTrack = (id: Track['id']) => {
  return enhancedFetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${id}`, {
    method: HTTP_METHODS_TYPE.DELETE,
    revalidate: [ROUTES.TRACKS_LIST],
  });
};

export default deleteOneTrack;
