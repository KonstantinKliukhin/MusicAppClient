import React, { FC } from 'react';
import { FormikAudioInput, WhiteRoundedCard } from '../../../../shared/ui';
import UploadTrackButtonsContainer from '../../../../shared/ui/containers/UploadTrackButtonsContainer';
import { TrackCreationSubmitButton } from '../../../../features/createTrackForm/ui';
import { TrackCreationNavigationButton } from '../../../../features/trackCreationNavigation';
import { ROUTES } from '../../../../../routes';

export const CreateTrackThirdStepPage: FC = () => {
  return (
    <>
      <WhiteRoundedCard title={'Track Audio *'}>
        <FormikAudioInput name={'audio'} />
      </WhiteRoundedCard>
      <UploadTrackButtonsContainer>
        <TrackCreationNavigationButton step={1} type={'back'} link={ROUTES.CREATE_TRACK_SECOND_STEP}>
          Back
        </TrackCreationNavigationButton>
        <TrackCreationSubmitButton>
          Submit
        </TrackCreationSubmitButton>
      </UploadTrackButtonsContainer>
    </>
  );
};
