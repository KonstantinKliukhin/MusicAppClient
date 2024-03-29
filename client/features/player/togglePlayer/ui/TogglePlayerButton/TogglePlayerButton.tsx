'use client';

import { Pause, PlayArrow } from '@mui/icons-material';
import { useUnit } from 'effector-react';
import React, { FC } from 'react';
import { $activeTrack, setActiveTrackEvent, Track } from '@entities/track';
import { IconButton } from '@shared/ui';
import { $pause, pauseEvent, playEvent } from '../../model';

type PropsType = {
  className?: string;
  track: Track | null;
};

export const TogglePlayerButton: FC<PropsType> = (props) => {
  const [isPaused, activeTrack, play, setActiveTrack, pause] = useUnit([
    $pause,
    $activeTrack,
    playEvent,
    setActiveTrackEvent,
    pauseEvent,
  ]);

  const isCurrentTrack = activeTrack?.id === props.track?.id;

  const onToggle = () => {
    if (!props.track) return;
    if (!isCurrentTrack || !activeTrack) {
      setActiveTrack(props.track);
      play();
      return;
    }
    isPaused ? play() : pause();
  };

  return (
    <IconButton className={props.className} onClick={onToggle}>
      {isPaused || !isCurrentTrack ? <PlayArrow /> : <Pause />}
    </IconButton>
  );
};
