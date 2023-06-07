'use client';

import cs from 'classnames';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from './Step.module.scss';

type PropsType = {
  isActive: boolean;
  canGo: boolean;
  link: string;
  linkText: string | number;
  onClick?: () => void;
};

export const Step: FC<PropsType> = (props) => {
  return (
    <div
      className={cs(styles.root, {
        [styles.allowed]: props.canGo,
        [styles.active]: props.isActive,
      })}
    >
      {props.canGo ? (
        <Link className={styles.link} href={props.link} onClick={() => props.onClick && props.onClick()}>
          {props.linkText}
        </Link>
      ) : (
        <p>{props.linkText}</p>
      )}
    </div>
  );
};
