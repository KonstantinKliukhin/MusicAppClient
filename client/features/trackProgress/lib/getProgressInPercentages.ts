export const getProgressInPercentages = (duration: number, currentTime: number) => {
  return (currentTime / duration) * 100;
}