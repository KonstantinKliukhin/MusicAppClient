import createTrack from './createTrack';
import getTracks from './getTracks';
import getOneTrack from './getOneTrack';
import createTrackComment from './createTrackComment';
import deleteTrack from './deleteTrack';
import addTrackListen from '@services/trackService/addTrackListen';

const trackService = {
  createTrack,
  getOneTrack,
  getTracks,
  createTrackComment,
  deleteTrack,
  addTrackListen,
};

export default trackService;
