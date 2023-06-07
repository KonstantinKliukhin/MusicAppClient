"use client"

import { useUnit } from 'effector-react'
import moment from 'moment';
import React, { FC, useMemo } from 'react'
import { $currentTime, $duration, useIsCurrentTrack } from '../../../../entities/player'
import { Track } from '../../../../entities/track'

type PropsType = {
  trackId: Track['id'];
};

export const SmallTrackProgressView: FC<PropsType> = (props) => {
  const [currentTime, duration] = useUnit([$currentTime, $duration])
  const isCurrentTrack = useIsCurrentTrack(props.trackId)

  const currentTimeView: string | null = useMemo(() => moment(currentTime * 1000).format('mm:ss'), [currentTime])
  const durationView: string | null = useMemo(() => moment(duration * 1000).format('mm:ss'), [duration])

  if (!isCurrentTrack) return null

  return (
    <div>
      {currentTimeView} / {durationView}
    </div>
  )
}
