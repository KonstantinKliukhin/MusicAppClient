'use client';

import React, { ChangeEvent, FC } from 'react';
import styles from './BlueRangeInput.module.scss';

type PropsType = {
  left: number;
  right: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const BlueRangeInput: FC<PropsType> = (props) => {
  return (
    <div className={styles.root}>
      <input
        style={{
          backgroundSize: `${(props.left * 100) / props.right}% 100%`,
        }}
        className={styles.rangeInput}
        min={0}
        max={props.right}
        value={props.left}
        onChange={props.onChange}
        type={'range'}
      />
    </div>
  );
};
