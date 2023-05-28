'use client';

import styles from './NavBar.module.scss';
import Image from 'next/image';
import Logo from '@images/logo/spotify.svg';
import NavBarLink from './components/NavBarLink';
import ThemePicker from './components/ThemePicker';
import { ROUTES } from '../../../routes';
import SignInButton from '@bzComponents/buttons/SignInButton';
import SignUpButton from '@bzComponents/buttons/signUpButton';

const menuLinks = [
  {
    href: ROUTES.HOME,
    text: 'Main page',
  },
  {
    href: ROUTES.TRACKS_LIST,
    text: 'track List',
  },
  // {
  //   href: '/albums',
  //   text: 'Albums List',
  // },
];

export default function NavBar() {
  return (
    <nav className={styles.root}>
      <Image className={styles.logo} src={Logo} alt={'logo'} />
      <ul className={styles.linksContainer}>
        {menuLinks.map((link) => (
          <NavBarLink key={link.href} href={link.href} text={link.text} />
        ))}
      </ul>
      <div className={styles.buttonsContainer}>
        <SignInButton />
        <SignUpButton />
        <button>
          <ThemePicker />
        </button>
      </div>
    </nav>
  );
}
