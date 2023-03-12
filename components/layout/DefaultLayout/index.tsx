import React, { FC, ReactElement, ReactNode } from 'react';
import NavBar from '@bzComponents/NavBar';
import styles from './DefaultLayout.module.scss';
import StaticBottomPlayer from '@bzComponents/staticBottomPlayer';

interface IDefaultLayoutProps {
  children: ReactNode | ReactElement;
}

const DefaultLayout: FC<IDefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={styles.container}>{children}</main>
      <StaticBottomPlayer />
    </>
  );
};

export default DefaultLayout;
