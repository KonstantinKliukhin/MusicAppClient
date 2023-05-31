'use client';

import styles from './Header.module.scss';
import Image from 'next/image';
import Logo from '@images/logo/spotify.svg';
import { FC, ReactNode } from 'react';

type PropsType = {
  navigation: ReactNode;
  rightContent: ReactNode;
};

export const Header: FC<PropsType> = (props) => {
  return (
    <nav className={styles.root}>
      <Image className={styles.logo} src={Logo} alt={'logo'} />
      <ul className={styles.navigation}>{props.navigation}</ul>
      <div className={styles.right}>{props.rightContent}</div>
    </nav>
  );
};
