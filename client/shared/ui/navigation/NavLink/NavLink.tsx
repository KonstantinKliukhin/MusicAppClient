'use client';
import styles from './NavLink.module.scss';
import cs from 'classnames';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';

type PropsType = PropsWithChildren & {
  href: string;
};

const NavLink: FC<PropsType> = (props) => {
  const pathname = usePathname();

  return (
    <li className={cs(styles.link, { [styles.active]: pathname === props.href })}>
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
};

export default NavLink;
