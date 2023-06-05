import React, { FC } from 'react';
import styles from './BigTrackInfo.module.scss';
import { Track } from '../../model';
import Image from 'next/image';
import moment from 'moment';

type PropsType = {
  track: Track
}

export const BigTrackInfo: FC<PropsType> = props => {
  return (
    <div className={styles.root}>
      <Image className={styles.image} src={props.track.picture} width={1000} height={1000} alt={props.track.name} />

      <div className={styles.texts}>
        <p className={styles.type}>Single</p>
        <h1 className={styles.name}>{props.track.name}</h1>
        <p className={styles.metaInfo}>{props.track.artist} · {moment(props.track.createdAt).format('YYYY')}</p>
      </div>
    </div>
  );
};
