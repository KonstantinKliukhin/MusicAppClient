import React, { FC } from 'react';
import { TrackCreationNavigationButton } from '@features/trackCreationNavigation';
import { ROUTES } from '@shared/config/routes';
import {
  EndListContainer,
  FormikTextAreaInput,
  FormikTextInput,
  WhiteRoundedCard,
} from '@shared/ui';

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
      <EndListContainer>
        <TrackCreationNavigationButton
          step={1}
          type={'next'}
          link={ROUTES.CREATE_TRACK_SECOND_STEP}
        >
          Next
        </TrackCreationNavigationButton>
      </EndListContainer>
    </>
  );
};
