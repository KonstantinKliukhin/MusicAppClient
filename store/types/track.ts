import {ITrack} from "../../../types/track";

export interface ITrackState {
    tracks: ITrack[];
    tracksLoading: boolean;
    tracksError: boolean;
}

export enum TrackActionTypes {
    FETCH_TRACKS='FETCH_TRACKS',
    FETCH_TRACKS_SUCCESS='FETCH_TRACKS_SUCCESS',
    FETCH_TRACKS_ERROR='FETCH_TRACKS_ERROR'
}

export interface FetchTracks {
    type: TrackActionTypes.FETCH_TRACKS;
}

export interface FetchTracksSuccess {
    type: TrackActionTypes.FETCH_TRACKS_SUCCESS;
    payload: ITrack[];
}

export interface FetchTracksError {
    type: TrackActionTypes.FETCH_TRACKS_ERROR;
}

export type TrackAction = FetchTracks | FetchTracksSuccess | FetchTracksError;