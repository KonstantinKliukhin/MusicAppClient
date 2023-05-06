'use client';

import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import styles from './StaticBottomPlayer.module.scss';
import RangeInput from '../../ui/inputs/RangeInput';
import useActions, { useAppSelector } from '@hooks/reduxHooks';
import { Track } from '@entities/track/Track';
import IconButton from '@uiComponents/buttons/IconButton';
import TrackProgress from '@bzComponents/TrackProgress';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

let audio: HTMLAudioElement | null = null;

const StaticBottomPlayer: FC = () => {
  const { pause, volume, active, duration, currentTime } = useAppSelector((state) => state.player);
  const {
    pauseTrack,
    playTrack,
    setVolume,
    setCurrentTime,
    setDuration,
    playNextTrack,
    playPrevTrack,
  } = useActions();
  const [savedTrackId, setSavedTrackId] = useState<Track['id'] | null>(null);

  useEffect(() => {
    if (!audio) return;
    pause ? audio.pause() : audio.play();
  }, [pause]);

  const playAudio = () => {
    if (!audio) return;
    playTrack();
    audio.play();
    return;
  };

  const pauseAudio = () => {
    if (!audio) return;
    pauseTrack();
    audio.pause();
  };

  const togglePlay = () => {
    pause ? playAudio() : pauseAudio();
  };

  const setupAudio = () => {
    if (!active) return;
    audio = new Audio();
    audio.src = active.audio;
    audio.onloadedmetadata = () => {
      if (!audio) return;
      setDuration(audio.duration);
      pause ? pauseAudio() : playAudio();
    };
    audio.ontimeupdate = () => {
      if (!audio) return;
      setCurrentTime(audio.currentTime);
    };
    audio.volume = volume / 100;
  };

  useEffect(() => {
    if (!active) return;
    if (savedTrackId !== active.id) {
      pauseAudio();
      audio = null;
      setSavedTrackId(active.id);
      setupAudio();
      return;
    }

    if (!audio) {
      setupAudio();
      return;
    }

    audio.volume = volume / 100;
  }, [volume, currentTime, active]);

  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  const changeCurrentTime = (value: number) => {
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  if (!active) return null;
  return (
    <div className={styles.root}>
      <div className={styles.player}>
        {audio ? (
          <div className={styles.trackProgressWrapper}>
            <TrackProgress
              currentTime={currentTime}
              duration={duration}
              onChange={changeCurrentTime}
            />
          </div>
        ) : null}
        <div className={styles.contentWrapper}>
          <div className={styles.manageTrackButtonsWrapper}>
            <IconButton className={styles.manageTrackButton} onClick={() => playPrevTrack()}>
              <SkipPreviousIcon />
            </IconButton>
            <IconButton className={styles.manageTrackButton} onClick={togglePlay}>
              {pause ? <PlayArrow /> : <Pause />}
            </IconButton>
            <IconButton className={styles.manageTrackButton} onClick={() => playNextTrack()}>
              <SkipNextIcon />
            </IconButton>
          </div>

          <div className={styles.textWrapper}>
            <p className={styles.trackName}>{active.name}</p>
            <p className={styles.artistName}>{active.artist}</p>
          </div>

          <div className={styles.volumeSectionWrapper}>
            <VolumeUp />
            <RangeInput left={volume} right={100} onChange={changeVolume} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticBottomPlayer;
