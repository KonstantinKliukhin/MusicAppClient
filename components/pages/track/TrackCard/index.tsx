import React, { FC } from 'react';
import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import styles from './TrackCard.module.scss';
import { ITrack } from '@entities/track/Track';
import Image from 'next/image';

type PropsType = ITrack;

const TrackCard: FC<PropsType> = (props) => {
  return (
    <WhiteRoundedCard>
      <div className={styles.root}>
        <Image
          className={styles.img}
          width={200}
          height={200}
          src={props.picture}
          alt={props.name}
        />
        <div className={styles.textsWrapper}>
          <h2 className={styles.artistName}>Artist: {props.artist}</h2>
          <h1 className={styles.trackName}>Track: {props.name}</h1>
          <h3 className={styles.listens}>Listens: {props.listens}</h3>
        </div>
      </div>
    </WhiteRoundedCard>
  );
};

export default TrackCard;
