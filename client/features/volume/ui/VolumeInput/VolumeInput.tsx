'use client';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useUnit } from 'effector-react';
import React, { FC } from 'react';
import { $volume, setVolumeActionEvent } from '../../../../entities/player';
import { BlueRangeInput } from '../../../../shared/ui';
import styles from './VolumeInput.module.scss';

export const VolumeInput: FC = () => {
  const [volume, setVolume] = useUnit([$volume, setVolumeActionEvent]);

  return (
    <div className={styles.root}>
      <VolumeUpIcon />
      <BlueRangeInput left={volume} right={100} onChange={(e) => setVolume(Number(e.target.value))} />;
    </div>
  )
};
