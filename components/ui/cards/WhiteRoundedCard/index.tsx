import React, { FC, PropsWithChildren } from 'react'
import styles from './WhiteRoundedCard.module.scss';

type PropsType = {
  title?: string;
} & PropsWithChildren;
const WhiteRoundedCard: FC<PropsType> = props => {
  return (
    <div className={styles.root}>
      {props.title ? <div className={styles.header}>
        <h3 className={styles.headerTitle}>
          {props.title}
        </h3>
      </div> : null}
      <div className={styles.body}>
        {props.children}
      </div>
    </div>
  )
}

export default WhiteRoundedCard