"use client"

import { useUnit } from 'effector-react';
import React, { FC, PropsWithChildren } from 'react';
import { $audioLoaded } from '../../model';
import { useAudio } from '../../model';

export const AudioManager: FC<PropsWithChildren> = props => {
  const [audioLoaded] = useUnit([$audioLoaded]);
  useAudio();

  if (!audioLoaded) return null;

  return <>{props.children}</>;
};
