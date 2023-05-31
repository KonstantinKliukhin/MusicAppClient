'use client';
import React, { FC } from 'react';
import RangeInput from '../../../../shared/ui/inputs/RangeInput';
import { useUnit } from 'effector-react';
import { $volume, setVolumeActionEvent } from '../../../../entities/player';

export const VolumeInput: FC = () => {
  const [volume, setVolume] = useUnit([$volume, setVolumeActionEvent]);

  return (
    <RangeInput left={volume} right={100} onChange={(e) => setVolume(Number(e.target.value))} />
  );
};
