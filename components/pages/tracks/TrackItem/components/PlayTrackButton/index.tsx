'use client'

import React, { FC, useMemo } from 'react'
import useActions, { useAppSelector } from '@hooks/reduxHooks'
import { IconButton } from '@mui/material'
import { Pause, PlayArrow } from '@mui/icons-material'
import { ITrack } from '@entities/track/Track'

type PropsType = ITrack;

const PlayTrackButton: FC<PropsType> = props => {
  const {
    setActiveTrack,
    playTrack,
    pauseTrack,
  } = useActions()
  const { pause, active } = useAppSelector((state) => state.player)

  const isCurrentTrack: boolean = useMemo(() => props.id === active?.id, [props.id, active?.id])
  const isActive: boolean = useMemo(() => isCurrentTrack && !pause, [isCurrentTrack, pause])

  const togglePlay = (): void => {
    if (!isCurrentTrack) {
      setActiveTrack(props)
      playTrack()
      return
    }

    pause ? playTrack() : pauseTrack()
  }

  return (
    <IconButton onClick={togglePlay}>{isActive ? <Pause /> : <PlayArrow />}</IconButton>
  )
}

export default PlayTrackButton