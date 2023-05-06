import React, { FC } from 'react';
import { Track } from '@entities/track/Track';
import styles from './TrackList.module.scss';
import TrackItem from '@pageComponents/tracks/TrackItem';

type PropsType = {
  tracks: Track[];
};

const TrackList: FC<PropsType> = (props) => {
  return (
    <div className={styles.root}>
      {props.tracks.map((track) => {
        return <TrackItem key={track.id} track={track} />;
      })}
    </div>
  );
};

export default TrackList;
