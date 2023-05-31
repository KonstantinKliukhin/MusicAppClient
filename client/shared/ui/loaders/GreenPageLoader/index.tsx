import React from 'react';
import Image from 'next/image';
import LoadingSVG from '@images/loaders/loader.svg';
import styles from './GreenPageLoader.module.scss';

const GreenPageLoader = () => {
  return (
    <div className={styles.root}>
      <Image className={styles.loader} src={LoadingSVG} alt={'loading'} />
    </div>
  );
};

export default GreenPageLoader;
