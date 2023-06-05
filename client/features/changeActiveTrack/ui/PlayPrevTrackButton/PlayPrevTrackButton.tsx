"use client"

import React, { FC } from 'react';
import { IconButton } from '../../../../shared/ui';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useUnit } from 'effector-react';
import { playNextTrackEvent, playPrevTrackEvent } from '../../../../entities/player';
import { SkipPrevious } from '@mui/icons-material';

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
