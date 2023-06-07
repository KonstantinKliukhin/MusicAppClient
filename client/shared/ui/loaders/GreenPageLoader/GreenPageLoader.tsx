import Image from 'next/image';
import React from 'react';
import LoadingSVG from '@images/loaders/loader.svg';
import styles from './GreenPageLoader.module.scss';

export const GreenPageLoader = () => {
  return (
    <div className={styles.root}>
      <Image className={styles.loader} src={LoadingSVG} alt={'loading'} />
    </div>
  );
};
