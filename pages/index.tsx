import type { NextPage } from 'next'
import DefaultLayout from '../layout/DefaultLayout'
import styles from './Home.module.css'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Welcome!</h1>
        <h3 className={styles.underTitleText}>Here are the best tracks from the whole world!</h3>
      </div>
    </DefaultLayout>
  )
}

export default Home
