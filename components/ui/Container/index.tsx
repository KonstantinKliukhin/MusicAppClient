import React, { FC, PropsWithChildren } from 'react'
import style from './Container.module.scss'

const Container: FC<PropsWithChildren> = (props) => {
  return (
    <div className={style.root}>
      {props.children}
    </div>
  )
}

export default Container