'use client';
import styles from './NavBarLink.module.scss';
import cs from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation';

type PropsType =
  | {
      href: string;
      text: string;
    }
  | {
      href: string;
      text: string;
      action: () => void;
    };

const NavBarLink: FC<PropsType> = (props) => {
  const pathname = usePathname();

  if ('action' in props) {
    return (
      <li
        className={cs(styles.link, { [styles.active]: pathname === props.href })}
        onClick={props.action}
      >
        {props.text}
      </li>
    );
  }

  return (
    <li className={cs(styles.link, { [styles.active]: pathname === props.href })}>
      <Link href={props.href}>{props.text}</Link>
    </li>
  );
};

export default NavBarLink;
