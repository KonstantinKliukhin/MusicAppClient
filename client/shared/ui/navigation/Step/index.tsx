'use client';

import React, { FC } from 'react';
import styles from './Step.module.scss';
import Link from 'next/link';
import cs from 'classnames';

type PropsType = {
  isActive: boolean;
  canGo: boolean;
  link: string;
  linkText: string | number;
  onClick?: () => void;
};

const Step: FC<PropsType> = (props) => {
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

export default Step;
