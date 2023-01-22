import createTrack from './createTrack'
import getTracks from './getTracks'
import getOneTrack from './getOneTrack'
import createTrackComment from './createTrackComment'
import deleteTrack from './deleteTrack'

const trackService = {
  createTrack,
  getOneTrack,
  getTracks,
  createTrackComment,
  deleteTrack,
}

export default trackService;