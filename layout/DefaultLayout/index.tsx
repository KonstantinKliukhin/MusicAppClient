import React, { FC, ReactElement, ReactNode } from 'react'
import NavBar from '../../components/NavBar'
import styles from './DefaultLayout.module.css'
import StaticBottomPlayer from '../../components/staticBottomPlayer'

interface IDefaultLayoutProps {
  children: ReactNode | ReactElement
}

const DefaultLayout: FC<IDefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>{children}</div>
      <StaticBottomPlayer />
    </>
  )
}

export default DefaultLayout
