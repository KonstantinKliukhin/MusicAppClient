"use client"

import React, { FC, PropsWithChildren } from 'react';
import { useUnit } from 'effector-react';
import { $audioLoaded } from '../../model';

export const AudioManager: FC<PropsWithChildren> = props => {
  const [audioLoaded] = useUnit([ $audioLoaded]);

  if (!audioLoaded) return null;

  return <>{props.children}</>;
};
