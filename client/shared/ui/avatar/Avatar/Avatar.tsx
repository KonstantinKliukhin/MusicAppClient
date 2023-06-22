import cs from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';
import styles from './Avatar.module.scss';

type PropsType = { size?: 'sm' | 'md' | 'lg' } & (
  | {
      firstLetter: string;
      secondLetter: string;
    }
  | {
      avatar: Url;
    }
);

export const Avatar: FC<PropsType> = (props) => {
  if ('avatar' in props) {
    return (
      <Image
        width={1000}
        height={1000}
        className={cs(styles.root, styles[props.size || 'sm'])}
        src={props.avatar}
        alt='avatar'
      />
    );
  }

  return (
    <div className={cs(styles.root, styles[props.size || 'sm'])}>
      {props.firstLetter}
      {props.secondLetter}
    </div>
  );
};
