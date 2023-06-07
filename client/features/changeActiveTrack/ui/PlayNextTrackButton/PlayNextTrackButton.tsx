"use client"

import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useUnit } from 'effector-react';
import React, { FC } from 'react';
import { playNextTrackEvent } from '../../../../entities/player';
import { IconButton } from '../../../../shared/ui';

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
