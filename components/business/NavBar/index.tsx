import styles from './NavBar.module.scss';
import Image from 'next/image';
import Logo from '@images/logo/spotify.svg';
import NavBarLink from './components/NavBarLink';
import ThemePicker from './components/ThemePicker';

const menuItems = [
  {
    href: '/',
    text: 'Main page',
  },
  {
    href: '/tracks',
    text: 'track List',
  },
  {
    href: '/albums',
    text: 'Albums List',
  },
];

export default function NavBar() {
  return (
    <nav className={styles.root}>
      <Image className={styles.logo} src={Logo} alt={'logo'} />
      <ul className={styles.linksContainer}>
        {menuItems.map((link) => (
          <NavBarLink key={link.href} href={link.href} text={link.text} />
        ))}
      </ul>
      <div className={styles.buttonsContainer}>
        <button>
          <ThemePicker />
        </button>
      </div>
    </nav>
  );
}
