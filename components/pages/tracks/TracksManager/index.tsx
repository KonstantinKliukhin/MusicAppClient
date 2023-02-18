'use client';

import React, { FC, useEffect, useMemo } from 'react';
import { ITrack } from '@entities/track/Track';
import useActions, { useAppSelector } from '@hooks/reduxHooks';

type PropsType = {
  tracks: ITrack[];
};

const TracksManager: FC<PropsType> = (props) => {
  const {
    currentTime,
    duration,
    active: activeTrack,
    pause: isPaused,
  } = useAppSelector((state) => state.player);
  const { setActiveTrack, playTrack } = useActions();

  const currentTrackOrder = useMemo(() => {
    if (!activeTrack || !props.tracks.length) return -1;
    return props.tracks.findIndex((track) => track.id === activeTrack?.id);
  }, [props.tracks, activeTrack]);

  useEffect(
    function playNextTrack() {
      if (
        duration > currentTime ||
        isPaused ||
        !activeTrack ||
        currentTrackOrder === -1 ||
        !props.tracks.length
      )
        return;

      const nextTrack = props.tracks[currentTrackOrder + 1]
        ? props.tracks[currentTrackOrder + 1]
        : props.tracks[0];

      setActiveTrack(nextTrack);
      playTrack();
    },
    [currentTime, activeTrack, duration, currentTrackOrder, isPaused, props.tracks],
  );
  return null;
};

export default TracksManager;
