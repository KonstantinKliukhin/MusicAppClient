"use client"

import React, { FC } from 'react';
import { IconButton } from '../../../../shared/ui';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useUnit } from 'effector-react';
import { playNextTrackEvent } from '../../../../entities/player';

type PropsType = {
  className?: string;
}

export const PlayNextTrackButton: FC<PropsType> = props => {
  const playNextTrack = useUnit(playNextTrackEvent);

  return (
    <IconButton className={props.className} onClick={() => playNextTrack()}>
    <SkipNextIcon />
  </IconButton>
  );
};
