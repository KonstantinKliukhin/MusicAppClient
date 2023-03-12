import React, { ChangeEventHandler, FC } from 'react';
import styles from './TrackProgress.module.scss';

type PropsType = {
  currentTime: number;
  duration: number;
  onChange: (value: number) => void;
};

const TrackProgress: FC<PropsType> = (props) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(Number(e.target.value));
  };

  return (
    <div className={styles.root}>
      <input
        style={{
          backgroundSize: `calc(${(props.currentTime * 100) / props.duration}% + 4px) 100%`,
        }}
        className={styles.rangeInput}
        min={0}
        max={props.duration}
        value={props.currentTime}
        onChange={onChange}
        type={'range'}
      />
    </div>
  );
};

export default TrackProgress;
