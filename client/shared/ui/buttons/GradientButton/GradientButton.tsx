import cs from 'classnames';
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './GradientButton.module.scss';

type PropsType = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

export const GradientButton: FC<PropsType> = (props) => {
  return <button {...props} className={cs(styles.root, props.className)} />;
};
