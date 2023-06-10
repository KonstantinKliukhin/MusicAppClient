import Image from 'next/image';
import React, { FC } from 'react';
import styles from './Avatar.module.scss';

type PropsType =
  | {
      firstLetter: string;
      secondLetter: string;
    }
  | {
      avatar: Url;
    };

export const Avatar: FC<PropsType> = (props) => {
  if ('avatar' in props) {
    return (
      <Image width={1000} height={1000} className={styles.root} src={props.avatar} alt='avatar' />
    );
  }

  return (
    <div className={styles.root}>
      {props.firstLetter}
      {props.secondLetter}
    </div>
  );
};
