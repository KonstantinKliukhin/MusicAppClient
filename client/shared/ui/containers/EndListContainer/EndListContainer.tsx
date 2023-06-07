import React, { FC, PropsWithChildren } from 'react';
import styles from './EndListContainer.module.scss';

export const EndListContainer: FC<PropsWithChildren> = (props) => {
  return <div className={styles.root}>{props.children}</div>;
};

