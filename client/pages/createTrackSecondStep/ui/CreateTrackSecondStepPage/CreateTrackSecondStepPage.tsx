import React, { FC } from 'react';
import { ROUTES } from '../../../../../routes';
import { FormikImageInput, WhiteRoundedCard } from '../../../../shared/ui';
import UploadTrackButtonsContainer from '../../../../shared/ui/containers/UploadTrackButtonsContainer';
import { TrackCreationNavigationButton } from '../../../../features/trackCreationNavigation';

export const CreateTrackSecondStepPage: FC = () => {
  return (
    <>
      <WhiteRoundedCard title={'Track Image *'}>
        <FormikImageInput name={'picture'} />
      </WhiteRoundedCard>
      <UploadTrackButtonsContainer>
        <TrackCreationNavigationButton step={0} type={'back'} link={ROUTES.CREATE_TRACK_FIRST_STEP}>
          Back
        </TrackCreationNavigationButton>
        <TrackCreationNavigationButton step={2} type={'next'} link={ROUTES.CREATE_TRACK_THIRD_STEP}>
          Next
        </TrackCreationNavigationButton>
      </UploadTrackButtonsContainer>
    </>
  );
};
