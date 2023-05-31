import React, { FC, ReactNode } from 'react';
import styles from './TrackCard.module.scss';
import Image from 'next/image';
import PlayTrackButton from '@pageComponents/tracks/TrackItem/components/PlayTrackButton';
import TrackTimeView from '@bzComponents/TrackTimeView';
import Link from 'next/link';
import { ROUTES } from '../../../../../routes';
import { Track } from '../../model';
import { DeleteTrackButton } from '../../../../features/deleteTrack';

interface ITrackItemProps {
  track: Track;
  leftSlot?: ReactNode;
  prevImageSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export const TrackCard: FC<ITrackItemProps> = (props) => {
  return (
    <div className={styles.trackCard}>
      <div className={styles.trackCardBody}>
        {props.prevImageSlot}
        <PlayTrackButton {...props.track} />
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
        <TrackTimeView id={props.track.id} />
        <div className={styles.right}>
          {props.rightSlot}
          <DeleteTrackButton id={props.track.id} />
        </div>
      </div>
    </div>
  );
};
