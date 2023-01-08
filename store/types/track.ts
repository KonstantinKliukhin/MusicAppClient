import { ITrack } from '../../types/track'
import { RequestLoadingStateType } from './requestLoadingStateType'

export interface ITrackState {
  tracks: ITrack[]
  tracksLoading: boolean
  tracksError: boolean
  singleTrack: ITrack | null
  singleTrackLoading: boolean
  singleTrackError: boolean
  createTrackLoading: RequestLoadingStateType
  deleteTrackLoading: RequestLoadingStateType
  createCommentLoading: RequestLoadingStateType
}

export enum TrackActionTypes {
  FETCH_TRACKS = 'FETCH_TRACKS',
  FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS',
  FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR',

  FETCH_SINGLE_TRACK = 'FETCH_SINGLE_TRACK',
  FETCH_SINGLE_TRACK_SUCCESS = 'FETCH_SINGLE_TRACK_SUCCESS',
  FETCH_SINGLE_TRACK_ERROR = 'FETCH_SINGLE_TRACK_ERROR',

  CREATE_TRACK_LOADING = 'CREATE_TRACK_LOADING',
  CREATE_TRACK_ERROR = 'CREATE_TRACK_ERROR',
  CREATE_TRACK_SUCCESS = 'CREATE_TRACK_SUCCESS',
  CREATE_TRACK_REFRESH_STATE = 'CREATE_TRACK_REFRESH_STATE',

  DELETE_TRACK_LOADING = 'DELETE_TRACK_LOADING',
  DELETE_TRACK_ERROR = 'DELETE_TRACK_ERROR',
  DELETE_TRACK_SUCCESS = 'DELETE_TRACK_SUCCESS',
  DELETE_TRACK_REFRESH_STATE = 'DELETE_TRACK_REFRESH_STATE',

  CREATE_COMMENT_LOADING = 'CREATE_COMMENT_LOADING',
  CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR',
  CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS',
  CREATE_COMMENT_REFRESH_STATE = 'CREATE_COMMENT_REFRESH_STATE',
}

// get all tracks
export interface FetchTracks {
  type: TrackActionTypes.FETCH_TRACKS
}

export interface FetchTracksSuccess {
  type: TrackActionTypes.FETCH_TRACKS_SUCCESS
  payload: ITrack[]
}

export interface FetchTracksError {
  type: TrackActionTypes.FETCH_TRACKS_ERROR
}
// get one track
export interface FetchSingleTrack {
  type: TrackActionTypes.FETCH_SINGLE_TRACK
}

export interface FetchSingleTrackSuccess {
  type: TrackActionTypes.FETCH_SINGLE_TRACK_SUCCESS
  payload: ITrack
}

export interface FetchSingleTrackError {
  type: TrackActionTypes.FETCH_SINGLE_TRACK_ERROR
}

// create track
export interface createTrackRequest {
  type: TrackActionTypes.CREATE_TRACK_LOADING
}

export interface createTrackSuccess {
  type: TrackActionTypes.CREATE_TRACK_SUCCESS
}

export interface createTrackError {
  type: TrackActionTypes.CREATE_TRACK_ERROR
}

export interface refreshCreateTrackLoadingState {
  type: TrackActionTypes.CREATE_TRACK_REFRESH_STATE
}

// delete track
export interface deleteTrackRequest {
  type: TrackActionTypes.DELETE_TRACK_LOADING
}

export interface deleteTrackSuccess {
  type: TrackActionTypes.DELETE_TRACK_SUCCESS
}

export interface deleteTrackError {
  type: TrackActionTypes.DELETE_TRACK_ERROR
}

export interface refreshDeleteTrackLoadingState {
  type: TrackActionTypes.DELETE_TRACK_REFRESH_STATE
}

// add comment
export interface createCommentRequest {
  type: TrackActionTypes.CREATE_COMMENT_LOADING
}

export interface createCommentSuccess {
  type: TrackActionTypes.CREATE_COMMENT_SUCCESS
}

export interface createCommentError {
  type: TrackActionTypes.CREATE_COMMENT_ERROR
}

export interface refreshCreateCommentLoadingState {
  type: TrackActionTypes.CREATE_COMMENT_REFRESH_STATE
}

export type TrackAction =
  | FetchTracks
  | FetchTracksSuccess
  | FetchTracksError
  | FetchSingleTrack
  | FetchSingleTrackSuccess
  | FetchSingleTrackError
  | createTrackRequest
  | createTrackError
  | createTrackSuccess
  | refreshCreateTrackLoadingState
  | deleteTrackRequest
  | deleteTrackSuccess
  | deleteTrackError
  | refreshDeleteTrackLoadingState
  | createCommentRequest
  | createCommentSuccess
  | createCommentError
  | refreshCreateCommentLoadingState
