'use client'

import React, { FC, useMemo } from 'react'
import { ITrack } from '@entities/track/Track'
import { IconButton } from '@mui/material'
import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import styles from './TrackItem.module.scss'
import { useRouter } from 'next/navigation'
import useActions, { useAppSelector } from '@hooks/reduxHooks'
import getTimeDueSeconds from '../../../utils/getTimeDueSeconds'
import Image from 'next/image'
import trackService from '@services/trackService'

interface ITrackItemProps {
  track: ITrack
  active: boolean
}

const TrackItem: FC<ITrackItemProps> = ({ track }) => {
  const router = useRouter()
  const {
    setActiveTrack,
    playTrack,
    pauseTrack,
  } = useActions()
  const { pause, active, currentTime, duration } = useAppSelector((state) => state.player)

  const isCurrentVideo: boolean = useMemo(() => track.id === active?.id, [track.id, active?.id])
  const isActive: boolean = useMemo(() => isCurrentVideo && !pause, [isCurrentVideo, pause])

  const togglePlay = (): void => {
    if (!isCurrentVideo) {
      setActiveTrack(track)
      playTrack()
      return
    }

    pause ? playTrack() : pauseTrack()
  }

  const currentTimeView: string | null = useMemo(
    () => (isCurrentVideo ? getTimeDueSeconds(currentTime) : null),
    [currentTime, isCurrentVideo],
  )
  const durationView: string | null = useMemo(
    () => (isCurrentVideo ? getTimeDueSeconds(duration) : null),
    [currentTime, isCurrentVideo],
  )

  return (
    <div className={styles.trackCard}>
      <div className={styles.trackCardBody}>
        <IconButton onClick={togglePlay}>{isActive ? <Pause /> : <PlayArrow />}</IconButton>
        <Image width={70} height={70} src={track.picture} alt={'track'} className={styles.trackImage} />
        <div>
          <p
            className={styles.trackName}

            onClick={() => router.push(`/tracks/${track.id}`)}
          >
            {track.name}
          </p>
          <p>
            {track.artist}
          </p>
        </div>
        {isCurrentVideo && (
          <div>
            {currentTimeView} / {durationView}
          </div>
        )}
        <IconButton className={styles.deleteButton} onClick={() => trackService.deleteTrack(track.id)}>
          <Delete />
        </IconButton>
      </div>
    </div>
  )
}

export default TrackItem
