import React, { FC } from 'react';
import WhiteRoundedCard from '../../../../../src/shared/ui/cards/WhiteRoundedCard';
import styles from './TrackTextCard.module.scss';
import { Track } from '../../../../src/entities/Track/model/types/Track';

type PropsType = Track;

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
