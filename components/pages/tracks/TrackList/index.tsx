import React, { FC } from 'react';
import { ITrack } from '@entities/track/Track';
import styles from './TrackList.module.scss';
import TrackItem from '@pageComponents/tracks/TrackItem';
import TracksManager from '@pageComponents/tracks/TracksManager';

type PropsType = {
  tracks: ITrack[];
};

const TrackList: FC<PropsType> = (props) => {
  return (
    <div className={styles.root}>
      {props.tracks.map((track) => {
        return <TrackItem key={track.id} track={track} />;
      })}
      <TracksManager tracks={props.tracks} />
    </div>
  );
};

export default TrackList;
