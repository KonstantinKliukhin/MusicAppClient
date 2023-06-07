import React, { FC } from 'react';
import { ROUTES } from '@shared/config/routes';
import { TrackCreationSubmitButton } from '../../../../features/createTrackForm/ui';
import { TrackCreationNavigationButton } from '../../../../features/trackCreationNavigation';
import { FormikAudioInput, WhiteRoundedCard } from '../../../../shared/ui';
import EndListContainer from '@shared/ui/containers/EndListContainer/EndListContainer';

export const CreateTrackThirdStepPage: FC = () => {
  return (
    <>
      <WhiteRoundedCard title={'Track Audio *'}>
        <FormikAudioInput name={'audio'} />
      </WhiteRoundedCard>
      <EndListContainer>
        <TrackCreationNavigationButton step={1} type={'back'} link={ROUTES.CREATE_TRACK_SECOND_STEP}>
          Back
        </TrackCreationNavigationButton>
        <TrackCreationSubmitButton>
          Submit
        </TrackCreationSubmitButton>
      </EndListContainer>
    </>
  );
};
