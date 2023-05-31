import WhiteRoundedCard from '../../../../../src/shared/ui/cards/WhiteRoundedCard';
import UploadTrackButtonsContainer from '../../../../src/shared/ui/Containers/UploadTrackButtonsContainer';
import UploadTrackMoveButton from '../../../../components/pages/createTrack/UploadTrackMoveButton';
import { FormikTextInput } from '../../../../../src/shared/ui/inputs/TextInput';
import { FormikTextAreaInput } from '../../../../../src/shared/ui/inputs/TextAreaInput';
import { ROUTES } from '../../../../../routes';
import constants from '../../../../shared/constants';

export const metadata = constants.CREATE_TRACK_PAGES_METADATA;

export default async function FirstStep() {
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
