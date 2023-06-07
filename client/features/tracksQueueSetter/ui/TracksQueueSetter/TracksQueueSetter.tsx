'use client';

import { useUnit } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { tracksQueueSetQueueEvent } from '@entities/player';
import { Track } from '@entities/track';

type PropsType = {
  tracks: Track[]
}

export const TracksQueueSetter: FC<PropsType> = props => {
  const setQueue = useUnit(tracksQueueSetQueueEvent);

  useEffect(() => {setQueue(props.tracks);}, [props.tracks]);

  return null;
};
