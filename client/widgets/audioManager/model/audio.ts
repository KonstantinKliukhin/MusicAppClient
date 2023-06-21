'use client';

import { createEvent, createStore } from 'effector/compat';
import { useUnit } from 'effector-react/compat';
import { useEffect, useMemo } from 'react';
import { $pause } from '@features/player/togglePlayer';
import {
  $currentTime,
  currentTimeTickEvent,
  durationSetEvent,
} from '@features/player/trackProgress';
import { $volume } from '@features/player/volume';
import { $activeTrack } from '@entities/track';

const audioLoadedEvent = createEvent();

export const useAudio = () => {
  const [volume, pause, currentTime, activeTrack, setDuration, tickCurrentTime, audioLoaded] =
    useUnit([
      $volume,
      $pause,
      $currentTime,
      $activeTrack,
      durationSetEvent,
      currentTimeTickEvent,
      audioLoadedEvent,
    ]);

  const audio = useMemo(function () {
    try {
      return new Audio();
    } catch (e) {
      return null;
    }
  }, []);

  useEffect(
    function () {
      if (!audio) return;
      audio.volume = volume / 100;
    },
    [volume],
  );

  useEffect(
    function () {
      if (!audio) return;
      pause ? audio.pause() : audio.play();
    },
    [pause],
  );

  useEffect(
    function () {
      if (!audio || !audio.src) return;
      if (Math.abs(currentTime - audio.currentTime) > 3) audio.currentTime = currentTime;
    },
    [currentTime],
  );

  useEffect(
    function setupTrackInAudio() {
      if (!audio) return;
      if (!activeTrack) {
        audio.src = '';
        audio.onloadeddata = () => 'mock';
      } else if (audio.src === activeTrack.audio) {
        return;
      } else {
        audio.pause();
        audio.src = activeTrack.audio;
        audio.onloadeddata = () => {
          audioLoaded();
          pause ? audio.pause() : audio.play();
          setDuration(audio.duration);
        };
        audio.ontimeupdate = (e) => tickCurrentTime(audio.currentTime);
      }
    },
    [activeTrack, pause],
  );
};

export const $audioLoaded = createStore<boolean>(false)
  .on(audioLoadedEvent, () => true)
  .on($activeTrack, (state, track) => (track ? state : false));
