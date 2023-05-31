import React, { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Layout.module.scss';

type PropsType = PropsWithChildren & {
  headerSlot: ReactNode;
  bottomSlot: ReactNode;
};

const Layout: FC<PropsType> = (props) => {
  return (
    <>
      {props.headerSlot}
      <main className={styles.container}>{props.children}</main>
      {props.bottomSlot}
    </>
  );
};

export default Layout;
