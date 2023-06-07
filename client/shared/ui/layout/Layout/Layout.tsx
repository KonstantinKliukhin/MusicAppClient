import React, { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Layout.module.scss';

type PropsType = PropsWithChildren & {
  headerSlot: ReactNode;
  bottomSlot: ReactNode;
};

export const Layout: FC<PropsType> = (props) => {
  return (
    <html lang='en'>
      <body>
      {props.headerSlot}
      <main className={styles.container}>{props.children}</main>
      {props.bottomSlot}
      </body>
    </html>
  );
};
