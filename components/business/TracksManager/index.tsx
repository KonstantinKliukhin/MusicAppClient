'use client';

import React, { FC, useEffect, useMemo } from 'react';
import { Track } from '@entities/track/Track';
import useActions, { useAppSelector } from '@hooks/reduxHooks';
import { useMutation } from 'react-query';
import { REACT_QUERY_KEYS_TYPE } from '@commonTypes/ReactQueryKeys';
import TrackService from '@services/trackService';

type PropsType = {
  tracks: Track[];
};

const TracksManager: FC<PropsType> = (props) => {
  const {
    currentTime,
    duration,
    active: activeTrack,
    pause: isPaused,
  } = useAppSelector((state) => state.player);
  const { setTracksQueue, playNextTrack, setActiveTrack } = useActions();
  const { mutateAsync } = useMutation(
    REACT_QUERY_KEYS_TYPE.MUTATE_TRACK,
    TrackService.addTrackListen,
  );

  useEffect(() => {
    if (!props.tracks.length) return;

    if (activeTrack && !props.tracks.some((track) => track.id === activeTrack.id)) {
      setActiveTrack(null);
    }

    setTracksQueue(props.tracks);
  }, [props.tracks]);

  const currentTrackOrder = useMemo(() => {
    if (!activeTrack || !props.tracks.length) return -1;
    return props.tracks.findIndex((track) => track.id === activeTrack?.id);
  }, [props.tracks, activeTrack]);

  useEffect(
    function playNextTrackAfterEnd() {
      if (
        duration > currentTime ||
        isPaused ||
        !activeTrack ||
        currentTrackOrder === -1 ||
        !props.tracks.length
      )
        return;
      mutateAsync(activeTrack.id);

      playNextTrack();
    },
    [currentTime, activeTrack, duration, currentTrackOrder, isPaused, props.tracks],
  );
  return null;
};

export default TracksManager;
