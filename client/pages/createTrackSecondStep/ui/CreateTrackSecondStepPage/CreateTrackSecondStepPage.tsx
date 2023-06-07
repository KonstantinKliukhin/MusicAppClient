import React, { FC } from 'react';
import { TrackCreationNavigationButton } from '@features/trackCreationNavigation';
import { ROUTES } from '@shared/config/routes';
import { EndListContainer, FormikImageInput, WhiteRoundedCard } from '@shared/ui';

export const CreateTrackSecondStepPage: FC = () => {
  return (
    <>
      <WhiteRoundedCard title={'Track Image *'}>
        <FormikImageInput name={'picture'} />
      </WhiteRoundedCard>
      <EndListContainer>
        <TrackCreationNavigationButton step={0} type={'back'} link={ROUTES.CREATE_TRACK_FIRST_STEP}>
          Back
        </TrackCreationNavigationButton>
        <TrackCreationNavigationButton step={2} type={'next'} link={ROUTES.CREATE_TRACK_THIRD_STEP}>
          Next
        </TrackCreationNavigationButton>
      </EndListContainer>
    </>
  );
};
