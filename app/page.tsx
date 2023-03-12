import styles from './Home.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bsound',
  description: 'Welcome to Bsound',
  keywords: ['Bsound', 'music', 'tracks', 'sound'],
};

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome!</h1>
      <h3 className={styles.underTitleText}>Here are the best tracks from the whole world!</h3>
    </div>
  );
}
