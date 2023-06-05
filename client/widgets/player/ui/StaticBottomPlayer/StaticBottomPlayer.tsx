import React, { FC } from 'react';
import { ActiveTrackTextInfo, StaticBottomPlayerLayout } from '../../../../entities/player';
import { AudioManager } from '../../../../features/audioManager';
import { PlayNextTrackButton, PlayPrevTrackButton } from '../../../../features/changeActiveTrack';
import { ToggleCurrentTrackButton } from '../../../../features/togglePlayer';
import { VolumeInput } from '../../../../features/setVolume';
import { ControlledTrackProgress } from '../../../../features/trackProgress';
import styles from './StaticBottomPlayer.module.scss';

export const StaticBottomPlayer: FC = () => {
  return (
    <AudioManager>
      <StaticBottomPlayerLayout
        trackInfoSlot={<ActiveTrackTextInfo />}
        trackActionsSlot={
          <>
            <PlayPrevTrackButton className={styles.manageTrackButton} />
            <ToggleCurrentTrackButton className={styles.manageTrackButton} />
            <PlayNextTrackButton className={styles.manageTrackButton} />
          </>
        }
        rightSlot={<VolumeInput/>}
        trackProgressSlot={<ControlledTrackProgress />}
      />
    </AudioManager>
  );
};
