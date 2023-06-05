'use client';

import { createEvent, createStore } from 'effector/compat';
import {
  $activeTrack,
  $currentTime,
  $pause,
  $volume,
  currentTimeTickEvent,
  durationSetEvent,
} from '../../../entities/player';
import { Track } from '../../../entities/track';
import getConfig from 'next/config';

const audioLoaded = createEvent();


export const audio = (function setupClientAudio() {
  try {
    const audio = new Audio();

    $volume.watch((volume) => audio.volume = volume / 100);
    $pause.watch(pause => pause ? audio.pause() : audio.play());
    $currentTime.watch(currentTime => {
      if (Math.abs(currentTime - audio.currentTime) > 3) audio.currentTime = currentTime;
    });
    $activeTrack.watch(function setupTrackInAudio(track: Track | null) {
      if (!track) {
        audio.src = '';
        audio.onloadeddata = () => 'mock';
      } else if (audio.src === track.audio) {
        return;
      } else {
        audio.pause();
        audio.src = track.audio;
        audio.onloadeddata = () => {
          audioLoaded();
          const pause = $pause.getState();
          pause ? audio.pause() : audio.play();
          durationSetEvent(audio.duration);
        };
        audio.ontimeupdate = (e) => currentTimeTickEvent(audio.currentTime);
      }

      return audio;
    });

    return audio;
  } catch (e) {
  //   server side
  }
})();


export const $audioLoaded = createStore<boolean>(false)
  .on(audioLoaded, () => true)
  .on($activeTrack, (state, track) => track ? state : false);

