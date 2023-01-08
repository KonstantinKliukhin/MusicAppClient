import React, { FC, useEffect, useMemo } from 'react'
import { ITrack } from '../../types/track'
import { Card, Grid, Image, Text, useTheme } from '@nextui-org/react'
import { IconButton } from '@mui/material'
import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import styles from './TrackItem.module.css'
import cs from 'classnames'
import { useRouter } from 'next/navigation'
import useActions from '../../hooks/useActions'
import useAppSelector from '../../hooks/useAppSelector'
import getTimeDueSeconds from '../../utils/getTimeDueSeconds'
import { RequestLoadingStateType } from '../../store/types/requestLoadingStateType'

interface ITrackItemProps {
  track: ITrack
  active: boolean
}

const TrackItem: FC<ITrackItemProps> = ({ track }) => {
  const { isDark } = useTheme()
  const router = useRouter()
  const {
    setActiveTrack,
    playTrack,
    pauseTrack,
    deleteTrack,
    refreshDeleteTrackLoadingState,
    fetchTracks,
  } = useActions()
  const { pause, active, currentTime, duration } = useAppSelector((state) => state.player)
  const deleteTrackLoading = useAppSelector((state) => state.tracks.deleteTrackLoading)

  const isCurrentVideo: boolean = useMemo(() => track._id === active?._id, [track._id, active?._id])
  const isActive: boolean = useMemo(() => isCurrentVideo && !pause, [isCurrentVideo, pause])

  useEffect(() => {
    if (deleteTrackLoading === RequestLoadingStateType.SUCCESS) {
      refreshDeleteTrackLoadingState()
      fetchTracks()
    }
  }, [deleteTrackLoading])

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
    <Grid xs={12}>
      <Card className={cs(styles.trackCard, { [styles.trackCardDark]: isDark })}>
        <Card.Body className={styles.trackCardBody}>
          <IconButton onClick={togglePlay}>{isActive ? <Pause /> : <PlayArrow />}</IconButton>
          <Image width={70} height={70} src={track.picture} className={styles.trackImage} />
          <Grid>
            <Text
              className={styles.trackName}
              size={20}
              weight={'bold'}
              onClick={() => router.push(`/tracks/${track._id}`)}
            >
              {track.name}
            </Text>
            <Text size={15} color={'gray'}>
              {track.artist}
            </Text>
          </Grid>
          {isCurrentVideo && (
            <div>
              {currentTimeView} / {durationView}
            </div>
          )}
          <IconButton className={styles.deleteButton} onClick={() => deleteTrack(track._id)}>
            <Delete />
          </IconButton>
        </Card.Body>
      </Card>
    </Grid>
  )
}

export default TrackItem
