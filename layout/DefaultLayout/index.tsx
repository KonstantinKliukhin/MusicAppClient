import React, { FC, ReactElement, ReactNode } from 'react'
import NavBar from '../../components/business/NavBar'
import styles from './DefaultLayout.module.scss'
import StaticBottomPlayer from '../../components/staticBottomPlayer'

interface IDefaultLayoutProps {
  children: ReactNode | ReactElement
}

const DefaultLayout: FC<IDefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={styles.container}>{children}</main>
      <StaticBottomPlayer />
    </>
  )
}

export default DefaultLayout
