import styles from './ControlledTrackProgress.module.scss';
import React, { FC } from 'react';
import { useUnit } from 'effector-react';
import { $percentagesProgress } from '../../model/percentagesProgress';
import { $currentTime, $duration, durationSetEvent } from '../../../../entities/player';

export const ControlledTrackProgress: FC = () => {
  const [percentagesProgress, duration, currentTime, setDuration] = useUnit([
    $percentagesProgress,
    $duration,
    $currentTime,
    durationSetEvent,
  ]);

  return (
    <div className={styles.root}>
      <input
        style={{ backgroundSize: `calc(${percentagesProgress}% + 4px) 100%` }}
        className={styles.rangeInput}
        min={0}
        max={duration}
        value={currentTime}
        onChange={(e) => setDuration(Number(e.target.value))}
        type={'range'}
      />
    </div>
  );
};
