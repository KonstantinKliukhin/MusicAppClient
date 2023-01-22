import React, { FC } from 'react'
import { ITrack } from '@entities/track/Track'
import TrackItem from '../TrackItem'
import styles from './TrackList.module.scss'

interface ITrackListProps {
  tracks: ITrack[]
}

const TrackList: FC<ITrackListProps> = ({ tracks }) => {
  return (
    <div className={styles.root}>
      {tracks.map((track) => {
        return <TrackItem key={track.id} track={track} active={false} />
      })}
    </div>
  )
}

export default TrackList
