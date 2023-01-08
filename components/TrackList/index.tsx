import React, { FC } from 'react'
import { ITrack } from '../../types/track'
import { Grid } from '@nextui-org/react'
import TrackItem from '../TrackItem'

interface ITrackListProps {
  tracks: ITrack[]
}

const TrackList: FC<ITrackListProps> = ({ tracks }) => {
  return (
    <Grid.Container direction={'column'}>
      <Grid.Container gap={3}>
        {tracks.map((track) => {
          return <TrackItem key={track._id} track={track} active={false} />
        })}
      </Grid.Container>
    </Grid.Container>
  )
}

export default TrackList
