import React, { FC } from 'react';
import { ROUTES } from '../../../../../routes';
import { FormikTextAreaInput, FormikTextInput, WhiteRoundedCard } from '../../../../shared/ui';
import UploadTrackButtonsContainer from '../../../../shared/ui/containers/UploadTrackButtonsContainer';
import { TrackCreationNavigationButton } from '../../../../features/trackCreationNavigation';

export const CreateTrackFirstStepPage: FC = () => {
  return (
    <>
      <WhiteRoundedCard title={'Track Name *'}>
        <FormikTextInput name={'name'} />
      </WhiteRoundedCard>

      <WhiteRoundedCard title={'Artist Name *'}>
        <FormikTextInput name={'artist'} />
      </WhiteRoundedCard>

      <WhiteRoundedCard title={'Track Text'}>
        <FormikTextAreaInput name={'text'} />
      </WhiteRoundedCard>
      <UploadTrackButtonsContainer>
        <TrackCreationNavigationButton step={1} type={'next'} link={ROUTES.CREATE_TRACK_SECOND_STEP}>
          Next
        </TrackCreationNavigationButton>
      </UploadTrackButtonsContainer>
    </>
  );
};
