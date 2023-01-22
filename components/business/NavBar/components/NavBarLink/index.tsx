"use client"
import styles from './NavBarLink.module.scss'
import cs from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { usePathname } from 'next/navigation'

type PropsType = {
  href: string;
  text: string;
}

const NavBarLink: FC<PropsType> = (props) => {
  const pathname = usePathname();

  return (
    <li className={cs(styles.link, {[styles.active]: pathname === props.href})}>
      <Link href={props.href}>{props.text}</Link>
    </li>
  )
}

export default NavBarLink