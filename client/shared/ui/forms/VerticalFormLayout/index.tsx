import React, { FC, PropsWithChildren } from 'react';
import styles from './VerticalFormLayout.module.scss';

const VerticalFormLayout: FC<PropsWithChildren> = (props) => {
  return <div className={styles.root}>{props.children}</div>;
};

export default VerticalFormLayout;
