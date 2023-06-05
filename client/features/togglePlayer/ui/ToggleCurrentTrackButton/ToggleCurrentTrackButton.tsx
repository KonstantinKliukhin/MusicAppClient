'use client';

import React, { FC } from 'react';
import { useUnit } from 'effector-react';
import { $pause, togglePlayerEvent } from '../../../../entities/player';
import { IconButton } from '../../../../shared/ui';
import { Pause, PlayArrow } from '@mui/icons-material';

type PropsType = {
  className?: string;
}

export const ToggleCurrentTrackButton: FC<PropsType> = props => {
  const [isPaused, togglePlayer] = useUnit([$pause, togglePlayerEvent]);

  return (
    <IconButton className={props.className} onClick={() => togglePlayer()}>
      {isPaused ? <PlayArrow /> : <Pause />}
    </IconButton>
  );
};
