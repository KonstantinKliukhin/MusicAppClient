'use client';

import React, { FC, PropsWithChildren } from 'react';
import { PinkButton } from '@shared/ui';
import { useCanSubmitTrackCreation } from '../../model';

export const TrackCreationSubmitButton: FC<PropsWithChildren> = props => {
  const canSubmit = useCanSubmitTrackCreation();

  return (
    <PinkButton disabled={!canSubmit} type={canSubmit ? 'submit' : 'button'}>
      {props.children}
    </PinkButton>
  );
};
