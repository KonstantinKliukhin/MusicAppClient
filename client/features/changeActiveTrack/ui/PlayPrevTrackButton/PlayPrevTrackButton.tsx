"use client"

import { SkipPrevious } from '@mui/icons-material';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useUnit } from 'effector-react';
import React, { FC } from 'react';
import { playNextTrackEvent, playPrevTrackEvent } from '../../../../entities/player';
import { IconButton } from '../../../../shared/ui';

type PropsType = {
  className?: string;
}

export const PlayPrevTrackButton: FC<PropsType> = props => {
  const playPrevTrack = useUnit(playPrevTrackEvent);

  return (
    <IconButton className={props.className} onClick={() => playPrevTrack()}>
    <SkipPrevious />
  </IconButton>
  );
};
