import React, { FC, useMemo } from 'react';
import utils from '@utils';
import { $currentTime, $duration, useIsCurrentTrack } from '../../../../entities/player';
import { Track } from '../../../../entities/track/model';
import { useUnit } from 'effector-react';

type PropsType = {
  trackId: Track['id'];
};

const SmallTrackProgressView: FC<PropsType> = (props) => {
  const [currentTime, duration] = useUnit([$currentTime, $duration]);
  const isCurrentTrack = useIsCurrentTrack(props.trackId);

  const currentTimeView: string | null = useMemo(
    () => utils.getTimeDueSeconds(currentTime),
    [currentTime],
  );

  const durationView: string | null = useMemo(() => utils.getTimeDueSeconds(duration), [duration]);

  if (!isCurrentTrack) return null;

  return (
    <div>
      {currentTimeView} / {durationView}
    </div>
  );
};

export default SmallTrackProgressView;
