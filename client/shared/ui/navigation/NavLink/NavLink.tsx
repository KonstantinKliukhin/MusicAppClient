'use client';
import cs from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';
import styles from './NavLink.module.scss';

type PropsType = PropsWithChildren & {
  href: string;
};

export const NavLink: FC<PropsType> = (props) => {
  const pathname = usePathname();

  return (
    <li className={cs(styles.link, { [styles.active]: pathname === props.href })}>
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
};
