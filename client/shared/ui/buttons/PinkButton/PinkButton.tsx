import cs from 'classnames';
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './UploadTrackMoveButton.module.scss';

type PropsType = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> &
  {
    disabled?: boolean
  };

export const PinkButton: FC<PropsType> = (props) => {
  return <button {...props} className={cs(styles.root, props.className, {[styles.disabled]: props.disabled})} />;
};
