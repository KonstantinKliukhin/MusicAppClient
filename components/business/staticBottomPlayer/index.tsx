'use client';

import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import styles from './StaticBottomPlayer.module.scss';
import { IconButton } from '@mui/material';
import { Col, Container, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import TrackProgress from '../TrackProgress';
import useActions, { useAppSelector } from '@hooks/reduxHooks';
import { ITrack } from '@entities/track/Track';

let audio: HTMLAudioElement | null = null;

const StaticBottomPlayer: FC = () => {
  const { pause, volume, active, duration, currentTime } = useAppSelector((state) => state.player);
  const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration } = useActions();
  const router = useRouter();
  const [savedTrackId, setSavedTrackId] = useState<ITrack['id'] | null>(null);

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

  const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
    if (!audio) return;
    const newTime = Number(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  if (!active) return null;
  return (
    <div className={styles.root}>
      <Container className={styles.player}>
        <Row justify={'flex-start'} align={'center'}>
          <Col span={1}>
            <IconButton onClick={togglePlay}>{pause ? <PlayArrow /> : <Pause />}</IconButton>
          </Col>
          <Col span={3}>
            <Text
              size={20}
              color={'white'}
              weight={'bold'}
              onClick={() => router.push(`/tracks/${active.id}`)}
            >
              {active.name}
            </Text>
            <Text color={'white'} size={15}>
              {active.artist}
            </Text>
          </Col>
          <Col>
            <TrackProgress
              parseSeconds
              left={currentTime}
              right={duration}
              onChange={changeCurrentTime}
            />
          </Col>
          <Col className={'ml-auto flex items-center gap-1 justify-end'}>
            <VolumeUp />
            <TrackProgress left={volume} right={100} onChange={changeVolume} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StaticBottomPlayer;
