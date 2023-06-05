import React, { FC, PropsWithChildren } from 'react';
import styles from './TrackCreation.module.scss';
import { CreateTrackStepper } from '../../../../features/trackCreationNavigation';
import { TrackCreationForm } from '../../../../features/createTrackForm/ui';

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
