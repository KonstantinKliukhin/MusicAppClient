'use client';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';
import { PinkButton } from '../../../../shared/ui';
import { changeCurrentStepEvent, useCanGo } from '../../model';

type PropsType =
  {
    link: string;
    step: number;
    type: 'next' | 'back';
  }
  & PropsWithChildren;

export const TrackCreationNavigationButton: FC<PropsType> = props => {
  const canGo = useCanGo(props.step);

  return canGo ? (
    <Link href={props.link}>
      <PinkButton onClick={() => changeCurrentStepEvent(props.step)}>{props.children}</PinkButton>
    </Link>
  ) : (
    <PinkButton disabled={true}>
      {props.children}
    </PinkButton>
  );
};
