'use client';

import React, { FC, useEffect } from 'react';
import { Track } from '../../../../entities/track';
import { useUnit } from 'effector-react';
import { tracksQueueSetQueueEvent } from '../../../../entities/player';

type PropsType = {
  tracks: Track[]
}

export const TracksQueueSetter: FC<PropsType> = props => {
  const setQueue = useUnit(tracksQueueSetQueueEvent);

  useEffect(() => {setQueue(props.tracks);}, [props.tracks]);

  return null;
};
