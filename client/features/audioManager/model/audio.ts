'use client';

import { createEvent, createStore } from 'effector/compat';
import { useUnit } from 'effector-react/compat';
import { useEffect, useMemo } from 'react';
import {
  $activeTrack,
  $currentTime,
  $pause,
  $volume,
  currentTimeTickEvent,
  durationSetEvent,
} from '@entities/player';

const audioLoadedEvent = createEvent();

// export const audio = (function setupClientAudio() {
//   try {
//     const audio = new Audio();
//
//     $volume.watch((volume) => audio.volume = volume / 100);
//     $pause.watch(pause => pause ? audio.pause() : audio.play());
//     $currentTime.watch(currentTime => {
//       if (Math.abs(currentTime - audio.currentTime) > 3) audio.currentTime = currentTime;
//     });
//     $activeTrack.watch(function setupTrackInAudio(track: Track | null) {
//       if (!track) {
//         audio.src = '';
//         audio.onloadeddata = () => 'mock';
//       } else if (audio.src === track.audio) {
//         return;
//       } else {
//         audio.pause();
//         audio.src = track.audio;
//         audio.onloadeddata = () => {
//           audioLoaded();
//           const pause = $pause.getState();
//           pause ? audio.pause() : audio.play();
//           durationSetEvent(audio.duration);
//         };
//         audio.ontimeupdate = (e) => currentTimeTickEvent(audio.currentTime);
//       }
//
//       return audio;
//     });
//
//     return audio;
//   } catch (e) {
//   //   server side
//   }
// })();

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
