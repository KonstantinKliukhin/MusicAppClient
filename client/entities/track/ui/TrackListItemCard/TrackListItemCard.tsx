import React, { FC, ReactNode } from 'react';
import styles from './TrackListItemCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '../../../../../routes';
import { Track } from '../../model';

interface ITrackItemProps {
  track: Track;
  leftSlot?: ReactNode;
  prevImageSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export const TrackListItemCard: FC<ITrackItemProps> = (props) => {
  return (
    <div className={styles.trackCard}>
      <div className={styles.trackCardBody}>
        {props.prevImageSlot}
        <Image
          width={70}
          height={70}
          src={props.track.picture}
          alt={'track'}
          className={styles.trackImage}
        />
        <div>
          <Link className={styles.trackName} href={`${ROUTES.TRACKS_LIST}/${props.track.id}`}>
            {props.track.name}
          </Link>
          <p>{props.track.artist}</p>
        </div>
        {props.leftSlot}
        <div className={styles.right}>
          {props.rightSlot}
        </div>
      </div>
    </div>
  );
};
