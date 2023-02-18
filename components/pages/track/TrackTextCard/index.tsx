import React, { FC } from 'react';
import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import styles from './TrackTextCard.module.scss';
import { ITrack } from '@entities/track/Track';

type PropsType = ITrack;

const TrackTextCard: FC<PropsType> = (props) => {
  return (
    <WhiteRoundedCard title={'track text'}>
      <div className={styles.root}>
        <p className={styles.text}>{props.text}</p>
      </div>
    </WhiteRoundedCard>
  );
};

export default TrackTextCard;
