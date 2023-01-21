import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome!</h1>
      <h3 className={styles.underTitleText}>Here are the best tracks from the whole world!</h3>
    </div>
  );
}

