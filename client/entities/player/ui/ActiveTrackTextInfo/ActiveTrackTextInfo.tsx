"use client"
import React, { FC } from 'react';
import styles from './ActiveTrackTextInfo.module.scss';
import { useUnit } from 'effector-react/compat';
import { $activeTrack } from '../../model';

export const ActiveTrackTextInfo: FC = () => {
  const activeTrack = useUnit($activeTrack);

  if (!activeTrack) return null;

  return (
    <div className={styles.textWrapper}>
      <p className={styles.trackName}>{activeTrack.name}</p>
      <p className={styles.artistName}>{activeTrack.artist}</p>
    </div>
  );
};
