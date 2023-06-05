import React, { FC, ReactNode } from 'react';
import styles from './StaticBottomPlayerLayout.module.scss';

type PropsType = {
  trackProgressSlot?: ReactNode;
  trackActionsSlot?: ReactNode;
  trackInfoSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export const StaticBottomPlayerLayout: FC<PropsType> = props => {

  return (
    <div className={styles.root}>
      <div className={styles.player}>
        <div className={styles.trackProgressWrapper}>
          {props.trackProgressSlot}
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.manageTrackButtonsWrapper}>
            {props.trackActionsSlot}
          </div>
          {props.trackInfoSlot}
          <div className={styles.right}>
            {props.rightSlot}
          </div>
        </div>
      </div>
    </div>
  );
};
