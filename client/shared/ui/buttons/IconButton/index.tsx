import React, { FC, PropsWithChildren } from 'react';
import styles from './IconButton.module.scss';
import cs from 'classnames';

type PropsType = {
  className?: string;
} & PropsWithChildren &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const IconButton: FC<PropsType> = ({ children, ...buttonProps }) => {
  return (
    <button {...buttonProps} className={cs(styles.root, buttonProps.className)}>
      {children}
      <span className={styles.clickAnimationElem} />
    </button>
  );
};

export default IconButton;
