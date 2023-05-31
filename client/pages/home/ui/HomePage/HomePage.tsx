import styles from './HomePage.module.scss';
import { NextPage } from 'next';

export const HomePage: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome!</h1>
      <h3 className={styles.underTitleText}>Here are the best tracks from the whole world!</h3>
    </div>
  );
};
