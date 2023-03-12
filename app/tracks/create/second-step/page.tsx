import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import UploadTrackButtonsContainer from '@uiComponents/Containers/UploadTrackButtonsContainer';
import UploadTrackMoveButton from '@pageComponents/createTrack/UploadTrackMoveButton';
import { FormikImageInput } from '@uiComponents/inputs/ImageInput';
import { ROUTES } from '../../../../routes';
import constants from '@constants';

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
