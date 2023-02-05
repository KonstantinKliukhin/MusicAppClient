import React, { FC } from 'react';
import { ITrack } from '@entities/track/Track';
import styles from './TrackList.module.scss';
import TrackItem from '@pageComponents/tracks/TrackItem';

interface ITrackListProps {
  tracks: ITrack[];
}

const TrackList: FC<ITrackListProps> = ({ tracks }) => {
  return (
    <div className={styles.root}>
      {tracks.map((track) => {
        return <TrackItem key={track.id} track={track} />;
      })}
    </div>
  );
};

export default TrackList;
