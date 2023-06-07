'use client';

import { SkipPrevious } from '@mui/icons-material';
import { useUnit } from 'effector-react';
import React, { FC } from 'react';
import { IconButton } from '@shared/ui';
import { playPrevTrackEvent } from '../../model';

type PropsType = {
  className?: string;
};

export const PlayPrevTrackButton: FC<PropsType> = (props) => {
  const playPrevTrack = useUnit(playPrevTrackEvent);

  return (
    <IconButton className={props.className} onClick={() => playPrevTrack()}>
      <SkipPrevious />
    </IconButton>
  );
};
