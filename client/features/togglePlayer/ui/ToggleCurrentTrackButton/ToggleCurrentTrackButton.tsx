'use client';

import { Pause, PlayArrow } from '@mui/icons-material';
import { useUnit } from 'effector-react';
import React, { FC } from 'react';
import { IconButton } from '@shared/ui';
import { $pause, togglePlayerEvent } from '../../model';

type PropsType = {
  className?: string;
};

export const ToggleCurrentTrackButton: FC<PropsType> = (props) => {
  const [isPaused, togglePlayer] = useUnit([$pause, togglePlayerEvent]);

  return (
    <IconButton className={props.className} onClick={() => togglePlayer()}>
      {isPaused ? <PlayArrow /> : <Pause />}
    </IconButton>
  );
};
