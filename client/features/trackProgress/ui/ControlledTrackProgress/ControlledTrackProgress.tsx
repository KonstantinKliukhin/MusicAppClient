'use client';

import { useUnit } from 'effector-react';
import React, { FC } from 'react';
import { $currentTime, $duration, setCurrentTimeEvent } from '../../../../entities/player';
import { getProgressInPercentages } from '../../lib';
import styles from './ControlledTrackProgress.module.scss';

export const ControlledTrackProgress: FC = () => {
  const [duration, currentTime, setCurrentTime] = useUnit([
    $duration,
    $currentTime,
    setCurrentTimeEvent,
  ]);

  return (
    <div className={styles.root}>
      <input
        style={{ backgroundSize: `calc(${getProgressInPercentages(duration, currentTime)}% + 4px) 100%` }}
        className={styles.rangeInput}
        min={0}
        max={duration}
        value={currentTime}
        onChange={(e) => setCurrentTime(Number(e.target.value))}
        type={'range'}
      />
    </div>
  );
};
