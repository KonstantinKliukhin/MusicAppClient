import React, { FC, ReactNode } from 'react';
import { Track, TrackListItemCard } from '@entities/track';
import styles from './TracksList.module.scss';

type PropsType = {
  tracks: Track[];
  cardLeftSlot?: (track: Track) => ReactNode;
  cardPrevImageSlot?: (track: Track) => ReactNode;
  cardRightSlot?: (track: Track) => ReactNode;
};

export const TracksList: FC<PropsType> = (props) => {
  return (
    <div className={styles.root}>
      {props.tracks.map((track) => (
        <TrackListItemCard
          key={track.id}
          track={track}
          rightSlot={props.cardRightSlot && props.cardRightSlot(track)}
          prevImageSlot={props.cardPrevImageSlot && props.cardPrevImageSlot(track)}
          leftSlot={props.cardLeftSlot && props.cardLeftSlot(track)}
        />
      ))}
    </div>
  );
};
