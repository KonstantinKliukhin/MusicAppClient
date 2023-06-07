import cs from 'classnames';
import React, { FC, PropsWithChildren } from 'react';
import styles from './WhiteRoundedCard.module.scss';

type PropsType = {
  title?: string;
  className?: string;
  bodyClassName?: string;
} & PropsWithChildren;

export const WhiteRoundedCard: FC<PropsType> = (props) => {
  return (
    <div className={cs(styles.root, props.className)}>
      {props.title ? (
        <div className={styles.header}>
          <h3 className={styles.headerTitle}>{props.title}</h3>
        </div>
      ) : null}
      <div className={cs(styles.body, props.bodyClassName)}>{props.children}</div>
    </div>
  );
};
