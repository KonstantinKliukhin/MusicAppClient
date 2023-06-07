import React, { FC, PropsWithChildren } from 'react'
import style from './Container.module.scss'

export const Container: FC<PropsWithChildren> = (props) => {
  return (
    <div className={style.root}>
      {props.children}
    </div>
  )
}
