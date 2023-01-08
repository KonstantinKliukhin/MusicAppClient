const getTimeDueSeconds = (time: number): string => {
  if (!time) return `00:00`
  const roundedTime = Math.ceil(time)
  const minutes = Math.floor(roundedTime / 60)
  const seconds = roundedTime % 60
  const minutesView = minutes < 10 ? `0${minutes}` : minutes
  const secondsView = seconds < 10 ? `0${seconds}` : seconds
  return `${minutesView}:${secondsView}`
}

export default getTimeDueSeconds
