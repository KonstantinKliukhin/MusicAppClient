import WhiteRoundedCard from '../../../../../src/shared/ui/cards/WhiteRoundedCard';
import UploadTrackButtonsContainer from '../../../../src/shared/ui/Containers/UploadTrackButtonsContainer';
import UploadTrackMoveButton from '../../../../components/pages/createTrack/UploadTrackMoveButton';
import { FormikImageInput } from '../../../../../src/shared/ui/inputs/ImageInput';
import { ROUTES } from '../../../../../routes';
import constants from '../../../../shared/constants';

export const metadata = constants.CREATE_TRACK_PAGES_METADATA;

export default function SecondStep() {
  return (
    <>
      <WhiteRoundedCard title={'track image'}>
        <FormikImageInput name={'picture'} />
      </WhiteRoundedCard>
      <UploadTrackButtonsContainer>
        <UploadTrackMoveButton type={'back'} step={1} link={ROUTES.CREATE_TRACK_FIRST_STEP}>
          Back
        </UploadTrackMoveButton>
        <UploadTrackMoveButton step={1} type={'next'} link={ROUTES.CREATE_TRACK_THIRD_STEP}>
          Next
        </UploadTrackMoveButton>
      </UploadTrackButtonsContainer>
    </>
  );
}
