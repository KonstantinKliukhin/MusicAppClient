import React, { FC } from 'react';
import {
  TrackCreationNavigationButton,
  TrackCreationSubmitButton,
} from '@features/track/createTrack';
import { ROUTES } from '@shared/config/routes';
import { FormikAudioInput, WhiteRoundedCard } from '@shared/ui';
import { EndListContainer } from '@shared/ui';

export const CreateTrackThirdStepPage: FC = () => {
  return (
    <>
      <WhiteRoundedCard title={'Track Audio *'}>
        <FormikAudioInput name={'audio'} />
      </WhiteRoundedCard>
      <EndListContainer>
        <TrackCreationNavigationButton
          step={1}
          type={'back'}
          link={ROUTES.CREATE_TRACK_SECOND_STEP}
        >
          Back
        </TrackCreationNavigationButton>
        <TrackCreationSubmitButton>Submit</TrackCreationSubmitButton>
      </EndListContainer>
    </>
  );
};
