import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import UploadTrackButtonsContainer from '@uiComponents/Containers/UploadTrackButtonsContainer';
import UploadTrackMoveButton from '@pageComponents/createTrack/UploadTrackMoveButton';
import { FormikTextInput } from '@uiComponents/inputs/TextInput';
import { FormikTextAreaInput } from '@uiComponents/inputs/TextAreaInput';
import { ROUTES } from '../../../../routes';
import constants from '@constants';
import axios from 'axios';

export const metadata = constants.CREATE_TRACK_PAGES_METADATA;

export default async function FirstStep() {
  await axios.post(
    `${process.env.NEXT_PUBLIC_API_PATH}/auth/sign-in`,
    {
      email: 'kostya+1@gmail.com',
      password: 'qweqwe',
    },
    {
      withCredentials: true,
    },
  );
  return (
    <>
      <WhiteRoundedCard title={'track name'}>
        <FormikTextInput name={'name'} />
      </WhiteRoundedCard>

      <WhiteRoundedCard title={'Artist name'}>
        <FormikTextInput name={'artist'} />
      </WhiteRoundedCard>

      <WhiteRoundedCard title={'track text'}>
        <FormikTextAreaInput name={'text'} />
      </WhiteRoundedCard>
      <UploadTrackButtonsContainer>
        <UploadTrackMoveButton step={0} type={'next'} link={ROUTES.CREATE_TRACK_SECOND_STEP}>
          Next
        </UploadTrackMoveButton>
      </UploadTrackButtonsContainer>
    </>
  );
}
