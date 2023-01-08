import React, { ChangeEvent, FC, useMemo } from 'react'
import styles from './TrackProgress.module.css'
import getTimeDueSeconds from '../../utils/getTimeDueSeconds'
interface ITrackProgressProps {
  left: number
  right: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  parseSeconds?: boolean
}

const TrackProgress: FC<ITrackProgressProps> = ({ left, right, onChange, parseSeconds }) => {
  const leftTimeView: string | number = useMemo(() => {
    if (!parseSeconds) return Math.ceil(left)
    return getTimeDueSeconds(left)
  }, [parseSeconds, left])

  const rightTimeView: string | number = useMemo(() => {
    if (!parseSeconds) return Math.ceil(right)
    return getTimeDueSeconds(right)
  }, [parseSeconds, right])

  return (
    <div className={styles.root}>
      <input min={0} max={right} value={left} onChange={onChange} type={'range'} />
      <div>
        {leftTimeView} / {rightTimeView}
      </div>
    </div>
  )
}

export default TrackProgress
