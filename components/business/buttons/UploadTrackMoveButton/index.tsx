'use client';

import React, { FC, PropsWithChildren, useMemo } from 'react';
import Link from 'next/link';
import PinkButton from '@uiComponents/buttons/PinkButton';
import { useAppSelector } from '@hooks/reduxHooks';
import styles from './UploadTrackMoveButton.module.scss';
import cs from 'classnames';

type PropsType = {
  link?: string;
  step: number;
  type: 'next' | 'back' | 'submit';
} & PropsWithChildren;

const UploadTrackMoveButton: FC<PropsType> = (props) => {
  const validSteps = useAppSelector((state) => state.uploadTrackSteps.validSteps);

  const isDisabled = useMemo(() => {
    if (props.type === 'back') return false;

    return !validSteps.includes(props.step);
  }, [validSteps, props.type, props.step]);

  const isSubmitType = props.type === 'submit';

  return (
    <PinkButton
      className={cs({ [styles.disabled]: isDisabled })}
      type={isSubmitType && !isDisabled ? 'submit' : 'button'}
    >
      {isSubmitType || !props.link ? (
        props.children
      ) : (
        <Link href={isDisabled ? '#' : props.link}>{props.children}</Link>
      )}
    </PinkButton>
  );
};

export default UploadTrackMoveButton;
