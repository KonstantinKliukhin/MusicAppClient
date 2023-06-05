import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './UploadTrackMoveButton.module.scss';
import cs from 'classnames';

type PropsType = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> &
  {
    disabled?: boolean
  };

const PinkButton: FC<PropsType> = (props) => {
  return <button {...props} className={cs(styles.root, props.className, {[styles.disabled]: props.disabled})} />;
};

export default PinkButton;
