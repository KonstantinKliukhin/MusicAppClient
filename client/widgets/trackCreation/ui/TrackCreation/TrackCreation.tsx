import React, { FC, PropsWithChildren } from 'react';
import { TrackCreationForm } from '@features/createTrack';
import { CreateTrackStepper } from '@features/trackCreationNavigation';
import styles from './TrackCreation.module.scss';

export const TrackCreation: FC<PropsWithChildren> = props => {
  return (
    <>
      <TrackCreationForm>
        <CreateTrackStepper />
        <div className={styles.content}>
          {props.children}
        </div>
      </TrackCreationForm>
    </>
  );
};
