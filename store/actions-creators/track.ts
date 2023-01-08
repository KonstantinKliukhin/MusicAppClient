import { TrackAction, TrackActionTypes } from '../types/track'
import { ThunkActionType } from '../types/thunkActionType'
import { ITrack } from '../../types/track'
import { ICreateTrackDto } from '../../types/dto/createTrack'
import axios from 'axios'
import { ICreateCommentDto } from '../../types/dto/createComment'

export const fetchTracks: ThunkActionType<TrackAction> = () => async (dispatch) => {
  try {
    dispatch({ type: TrackActionTypes.FETCH_TRACKS })
    const res = await axios.get<ITrack[]>(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`)

    const tracks = res.data.map((track) => ({
      ...track,
      audio: `${process.env.NEXT_PUBLIC_API_PATH}/${track.audio}`,
      picture: `${process.env.NEXT_PUBLIC_API_PATH}/${track.picture}`,
    }))

    dispatch({ type: TrackActionTypes.FETCH_TRACKS_SUCCESS, payload: tracks })
  } catch (e) {
    dispatch({ type: TrackActionTypes.FETCH_TRACKS_ERROR })
  }
}

export const fetchTrack: ThunkActionType<TrackAction> = (id: ITrack['_id']) => async (dispatch) => {
  try {
    dispatch({ type: TrackActionTypes.FETCH_SINGLE_TRACK })

    const res = await axios.get<ITrack>(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${id}`)

    const track: ITrack = {
      ...res.data,
      audio: `${process.env.NEXT_PUBLIC_API_PATH}/${res.data.audio}`,
      picture: `${process.env.NEXT_PUBLIC_API_PATH}/${res.data.picture}`,
    }

    dispatch({ type: TrackActionTypes.FETCH_SINGLE_TRACK_SUCCESS, payload: track })
  } catch (e) {
    dispatch({ type: TrackActionTypes.FETCH_SINGLE_TRACK_ERROR })
  }
}

export const createTrack: ThunkActionType<TrackAction> =
  (createTrackData: ICreateTrackDto) => async (dispatch) => {
    try {
      const formData = new FormData()

      Object.entries(createTrackData).forEach(([field, value]) => {
        formData.append(field, value)
      })

      dispatch({ type: TrackActionTypes.CREATE_TRACK_LOADING })

      await axios.post(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`, formData)

      dispatch({ type: TrackActionTypes.CREATE_TRACK_SUCCESS })
    } catch (e) {
      dispatch({ type: TrackActionTypes.CREATE_TRACK_ERROR })
    }
  }

export const refreshCreateTrackLoadingState = () => {
  return { type: TrackActionTypes.CREATE_TRACK_REFRESH_STATE }
}

export const deleteTrack: ThunkActionType<TrackAction> =
  (id: ITrack['_id']) => async (dispatch) => {
    try {
      dispatch({ type: TrackActionTypes.DELETE_TRACK_LOADING })

      await axios.delete(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${id}`)

      dispatch({ type: TrackActionTypes.DELETE_TRACK_SUCCESS })
    } catch (e) {
      dispatch({ type: TrackActionTypes.DELETE_TRACK_ERROR })
    }
  }

export const refreshDeleteTrackLoadingState = () => {
  return { type: TrackActionTypes.DELETE_TRACK_REFRESH_STATE }
}

export const createComment: ThunkActionType<TrackAction> =
  (trackId: ITrack['_id'], createCommentData: ICreateCommentDto) => async (dispatch) => {
    try {
      dispatch({ type: TrackActionTypes.CREATE_COMMENT_LOADING })

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_PATH}/tracks/${trackId}/comment`,
        createCommentData,
      )

      dispatch({ type: TrackActionTypes.CREATE_COMMENT_SUCCESS })
    } catch (e) {
      dispatch({ type: TrackActionTypes.CREATE_COMMENT_ERROR })
    }
  }
export const refreshCommentLoadingState = () => {
  return { type: TrackActionTypes.CREATE_COMMENT_REFRESH_STATE }
}
