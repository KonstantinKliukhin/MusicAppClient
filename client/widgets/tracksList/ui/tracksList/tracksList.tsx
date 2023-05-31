import React, { FC, ReactNode } from 'react';
import styles from './tracksList.module.scss';
import { Track, TrackCard } from '../../../../entities/track';

interface ITrackItemProps {
  tracks: Track[];
  cardLeftSlot?: ReactNode;
  cardPrevImageSlot?: ReactNode;
  cardRightSlot?: ReactNode;
}

export const TracksList: FC<ITrackItemProps> = (props) => {
  return (
    <div className={styles.root}>
      {props.tracks.map((track) => (
        <TrackCard
          key={track.id}
          track={track}
          rightSlot={props.cardRightSlot}
          prevImageSlot={props.cardPrevImageSlot}
          leftSlot={props.cardLeftSlot}
        />
      ))}
    </div>
  );
};
