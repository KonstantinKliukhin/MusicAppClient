'use client';

import React, { FC, useMemo } from 'react';
import { useAppSelector } from '@hooks/reduxHooks';
import utils from '@utils';
import { Track } from '../../../src/entities/Track/model/types/Track';

type PropsType = {
  id: Track['id'];
};

const TrackTimeView: FC<PropsType> = (props) => {
  const { active, currentTime, duration } = useAppSelector((state) => state.player);

  const isCurrentTrack: boolean = useMemo(() => props.id === active?.id, [props.id, active?.id]);

  const currentTimeView: string | null = useMemo(
    () => (isCurrentTrack ? utils.getTimeDueSeconds(currentTime) : null),
    [currentTime, isCurrentTrack],
  );
  const durationView: string | null = useMemo(
    () => (isCurrentTrack ? utils.getTimeDueSeconds(duration) : null),
    [isCurrentTrack, duration],
  );

  if (!isCurrentTrack) return null;

  return (
    <div>
      {currentTimeView} / {durationView}
    </div>
  );
};

export default TrackTimeView;
