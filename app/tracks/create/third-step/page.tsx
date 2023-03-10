import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import UploadTrackButtonsContainer from '@uiComponents/Containers/UploadTrackButtonsContainer';
import UploadTrackMoveButton from '@pageComponents/createTrack/UploadTrackMoveButton';
import { FormikAudioInput } from '@uiComponents/inputs/AudioInput';
import { ROUTES } from '../../../../routes';
import constants from '@constants';

export const metadata = constants.CREATE_TRACK_PAGES_METADATA;

export default function ThirdStep() {
  return (
    <>
      <WhiteRoundedCard title={'track audio'}>
        <FormikAudioInput name={'audio'} />
      </WhiteRoundedCard>
      <UploadTrackButtonsContainer>
        <UploadTrackMoveButton type={'back'} step={2} link={ROUTES.CREATE_TRACK_SECOND_STEP}>
          Back
        </UploadTrackMoveButton>
        <UploadTrackMoveButton step={2} type={'submit'}>
          Submit
        </UploadTrackMoveButton>
      </UploadTrackButtonsContainer>
    </>
  );
}
