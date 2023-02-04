'use client'

import React, { FC, useMemo } from 'react'
import { useAppSelector } from '@hooks/reduxHooks'
import getTimeDueSeconds from '../../../utils/getTimeDueSeconds'
import { ITrack } from '@entities/track/Track'

type PropsType = {
  id: ITrack['id']
}

const TrackTimeView: FC<PropsType> = props => {
  const { active, currentTime, duration } = useAppSelector((state) => state.player)

  const isCurrentTrack: boolean = useMemo(() => props.id === active?.id, [props.id, active?.id])

  const currentTimeView: string | null = useMemo(
    () => (isCurrentTrack ? getTimeDueSeconds(currentTime) : null),
    [currentTime, isCurrentTrack],
  )
  const durationView: string | null = useMemo(
    () => (isCurrentTrack ? getTimeDueSeconds(duration) : null),
    [currentTime, isCurrentTrack],
  )

  if (!isCurrentTrack) return null;

  return (
    <div>
      {currentTimeView} / {durationView}
    </div>
  )
}

export default TrackTimeView