import React, { FC } from 'react';
import { ITrack } from '@entities/track/Track';
import styles from './TrackItem.module.scss';
import Image from 'next/image';
import DeleteTrackButton from './components/DeleteTrackButton';
import PlayTrackButton from './components/PlayTrackButton';
import TrackTimeView from '@bzComponents/TrackTimeView';
import Link from 'next/link';
import { ROUTES } from '../../../../routes';

interface ITrackItemProps {
  track: ITrack;
}

const TrackItem: FC<ITrackItemProps> = ({ track }) => {
  return (
    <div className={styles.trackCard}>
      <div className={styles.trackCardBody}>
        <PlayTrackButton {...track} />
        <Image
          width={70}
          height={70}
          src={track.picture}
          alt={'track'}
          className={styles.trackImage}
        />
        <div>
          <Link className={styles.trackName} href={`${ROUTES.TRACKS_LIST}/${track.id}`}>
            {track.name}
          </Link>
          <p>{track.artist}</p>
        </div>
        <TrackTimeView id={track.id} />
        <div className={styles.deleteTrack}>
          <DeleteTrackButton id={track.id} />
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
