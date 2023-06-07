import cs from 'classnames';
import React, { FC, PropsWithChildren } from 'react';
import styles from './IconButton.module.scss';

type PropsType = {
  className?: string;
} & PropsWithChildren &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const IconButton: FC<PropsType> = ({ children, ...buttonProps }) => {
  return (
    <button {...buttonProps} className={cs(styles.root, buttonProps.className)}>
      {children}
      <span className={styles.clickAnimationElem} />
    </button>
  );
};
