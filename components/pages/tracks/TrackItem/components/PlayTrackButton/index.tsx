'use client';

import React, { FC, useMemo } from 'react';
import useActions, { useAppSelector } from '@hooks/reduxHooks';
import { Pause, PlayArrow } from '@mui/icons-material';
import { Track } from '@entities/track/Track';
import IconButton from '@uiComponents/buttons/IconButton';

type PropsType = Track;

const PlayTrackButton: FC<PropsType> = (props) => {
  const { setActiveTrack, playTrack, pauseTrack } = useActions();
  const active = useAppSelector((state) => state.player.active);
  const pause = useAppSelector((state) => state.player.pause);

  const isCurrentTrack: boolean = useMemo(() => props.id === active?.id, [props.id, active?.id]);
  const isActive: boolean = useMemo(() => isCurrentTrack && !pause, [isCurrentTrack, pause]);

  const togglePlay = (): void => {
    if (!isCurrentTrack) {
      setActiveTrack(props);
      playTrack();
      return;
    }

    pause ? playTrack() : pauseTrack();
  };

  return <IconButton onClick={togglePlay}>{isActive ? <Pause /> : <PlayArrow />}</IconButton>;
};

export default PlayTrackButton;
