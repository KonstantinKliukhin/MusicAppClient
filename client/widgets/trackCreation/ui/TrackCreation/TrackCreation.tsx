import React, { FC, PropsWithChildren } from 'react';
import { CreateTrackStepper, TrackCreationForm } from '@features/track/createTrack';
import styles from './TrackCreation.module.scss';

export const TrackCreation: FC<PropsWithChildren> = (props) => {
  return (
    <>
      <TrackCreationForm>
        <CreateTrackStepper />
        <div className={styles.content}>{props.children}</div>
      </TrackCreationForm>
    </>
  );
};
