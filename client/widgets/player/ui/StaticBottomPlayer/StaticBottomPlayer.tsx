'use client';
import React, { FC } from 'react';
import { PlayNextTrackButton, PlayPrevTrackButton } from '@features/changeActiveTrack';
import { ToggleCurrentTrackButton } from '@features/togglePlayer';
import { ControlledTrackProgress } from '@features/trackProgress';
import { VolumeInput } from '@features/volume';
import { ActiveTrackTextInfo } from '@entities/track';
import { StaticBottomPlayerLayout } from '@shared/ui';
import { useTrackAutoChange } from '../../model';
import styles from './StaticBottomPlayer.module.scss';

export const StaticBottomPlayer: FC = () => {
  useTrackAutoChange();
  return (
    <StaticBottomPlayerLayout
      trackInfoSlot={<ActiveTrackTextInfo />}
      trackActionsSlot={
        <>
          <PlayPrevTrackButton className={styles.manageTrackButton} />
          <ToggleCurrentTrackButton className={styles.manageTrackButton} />
          <PlayNextTrackButton className={styles.manageTrackButton} />
        </>
      }
      rightSlot={<VolumeInput />}
      trackProgressSlot={<ControlledTrackProgress />}
    />
  );
};
