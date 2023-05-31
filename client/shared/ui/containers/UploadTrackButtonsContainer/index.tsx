import React, { FC, PropsWithChildren } from 'react';
import styles from './UploadTrackButtonsContainer.module.scss';

const UploadTrackButtonsContainer: FC<PropsWithChildren> = (props) => {
  return <div className={styles.root}>{props.children}</div>;
};

export default UploadTrackButtonsContainer;
