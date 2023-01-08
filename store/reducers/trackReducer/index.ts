import { ITrackState, TrackAction, TrackActionTypes } from '../../types/track'
import { RequestLoadingStateType } from '../../types/requestLoadingStateType'

const initialState: ITrackState = {
  tracks: [],
  tracksLoading: false,
  tracksError: false,
  singleTrack: null,
  singleTrackError: false,
  singleTrackLoading: false,
  createTrackLoading: RequestLoadingStateType.IDLE,
  deleteTrackLoading: RequestLoadingStateType.IDLE,
  createCommentLoading: RequestLoadingStateType.IDLE,
}

export const trackReducer = (
  state: ITrackState = initialState,
  action: TrackAction,
): ITrackState => {
  switch (action.type) {
    case TrackActionTypes.FETCH_TRACKS:
      return { ...state, tracksLoading: true }
    case TrackActionTypes.FETCH_TRACKS_SUCCESS:
      return { ...state, tracks: action.payload, tracksError: false, tracksLoading: false }
    case TrackActionTypes.FETCH_TRACKS_ERROR:
      return { ...state, tracksLoading: false, tracksError: true }

    case TrackActionTypes.FETCH_SINGLE_TRACK:
      return { ...state, singleTrackLoading: true }
    case TrackActionTypes.FETCH_SINGLE_TRACK_SUCCESS:
      return {
        ...state,
        singleTrackLoading: false,
        singleTrackError: false,
        singleTrack: action.payload,
      }
    case TrackActionTypes.FETCH_SINGLE_TRACK_ERROR:
      return { ...state, singleTrackLoading: false, singleTrackError: true }

    case TrackActionTypes.CREATE_TRACK_LOADING:
      return { ...state, createTrackLoading: RequestLoadingStateType.LOADING }
    case TrackActionTypes.CREATE_TRACK_SUCCESS:
      return { ...state, createTrackLoading: RequestLoadingStateType.SUCCESS }
    case TrackActionTypes.CREATE_TRACK_ERROR:
      return { ...state, createTrackLoading: RequestLoadingStateType.ERROR }
    case TrackActionTypes.CREATE_TRACK_REFRESH_STATE:
      return { ...state, createTrackLoading: RequestLoadingStateType.IDLE }

    case TrackActionTypes.DELETE_TRACK_LOADING:
      return { ...state, deleteTrackLoading: RequestLoadingStateType.LOADING }
    case TrackActionTypes.DELETE_TRACK_SUCCESS:
      return { ...state, deleteTrackLoading: RequestLoadingStateType.SUCCESS }
    case TrackActionTypes.DELETE_TRACK_ERROR:
      return { ...state, deleteTrackLoading: RequestLoadingStateType.ERROR }
    case TrackActionTypes.DELETE_TRACK_REFRESH_STATE:
      return { ...state, deleteTrackLoading: RequestLoadingStateType.IDLE }

    case TrackActionTypes.CREATE_COMMENT_LOADING:
      return { ...state, createCommentLoading: RequestLoadingStateType.LOADING }
    case TrackActionTypes.CREATE_COMMENT_SUCCESS:
      return { ...state, createCommentLoading: RequestLoadingStateType.SUCCESS }
    case TrackActionTypes.CREATE_COMMENT_ERROR:
      return { ...state, createCommentLoading: RequestLoadingStateType.ERROR }
    case TrackActionTypes.CREATE_COMMENT_REFRESH_STATE:
      return { ...state, createCommentLoading: RequestLoadingStateType.IDLE }
    default:
      return { ...state }
  }
}

export default trackReducer
