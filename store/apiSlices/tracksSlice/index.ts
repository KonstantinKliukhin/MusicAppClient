import createApi from "../createApi";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { ITrack } from "../../../types/entities/track/track";
import { ICreateTrackDto } from "../../../types/entities/track/dto/createTrack";
import { IComment } from "../../../types/entities/track/comment";
import { ICreateCommentDto } from "../../../types/entities/track/dto/createComment";


enum TAGS_TYPES {
  TRACKS = "TRACKS",
  TRACK = "TRACK"
}

const tracksApiSlice = createApi({
  reducerPath: "tracks",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_PATH
  }),
  tagTypes: [TAGS_TYPES.TRACKS, TAGS_TYPES.TRACK],
  endpoints: (build) => ({
    fetchTracks: build.query<ITrack[], null>({
      query: () => ({ url: "/tracks" }),
      providesTags: [TAGS_TYPES.TRACKS],
      transformResponse: (tracks: ITrack[]) => tracks.map(track => ({...track, picture: `${process.env.NEXT_PUBLIC_API_PATH}/${track.picture}`, audio: `${process.env.NEXT_PUBLIC_API_PATH}/${track.audio}`}))
    }),
    fetchTrack: build.query<ITrack, number>({
      query: (id) => ({ url: `/tracks/${id}` }),
      providesTags: [TAGS_TYPES.TRACK],
      transformResponse: (track: ITrack) => ({...track, picture: `${process.env.NEXT_PUBLIC_API_PATH}/${track.picture}`, audio: `${process.env.NEXT_PUBLIC_API_PATH}/${track.audio}`})
    }),
    createTrack: build.mutation<ITrack, { id: ITrack["_id"], track: ICreateTrackDto }>({
      query: ({ id, track }) => ({
        url: `/tracks/${id}`,
        method: "POST",
        body: track
      }),
      invalidatesTags: [TAGS_TYPES.TRACKS]
    }),
    deleteTrack: build.mutation<null, ITrack["_id"]>({
      query: (id) => ({
        url: `/tracks/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: [TAGS_TYPES.TRACKS]
    }),
    createComment: build.mutation<IComment, { id: ITrack["_id"], comment: ICreateCommentDto }>({
      query: ({ id, comment }) => ({
        url: `/tracks/${id}/comment`,
        method: "POST",
        body: comment
      }),
      invalidatesTags: [TAGS_TYPES.TRACK]
    })
  })
});

const tracksReducer = {
  [tracksApiSlice.reducerPath]: tracksApiSlice.reducer,
}

export const {
  useCreateTrackMutation,
  useCreateCommentMutation,
  useFetchTrackQuery,
  useFetchTracksQuery,
  useDeleteTrackMutation
} = tracksApiSlice;

export const {middleware: trackApiMiddleware} = tracksApiSlice;

export default tracksReducer;



