'use client';

import React, { FC } from 'react';
import IconButton from '../../../../shared/ui/buttons/IconButton';
import { Pause, PlayArrow } from '@mui/icons-material';
import { useUnit } from 'effector-react';
import { $pause, playEvent } from '../../../../entities/player';

type PropsType = {
  className?: string;
};

export const TogglePlayerButton: FC<PropsType> = (props) => {
  const [isPaused, play] = useUnit([$pause, playEvent]);

  return (
    <IconButton className={props.className} onClick={() => play()}>
      {isPaused ? <PlayArrow /> : <Pause />}
    </IconButton>
  );
};
