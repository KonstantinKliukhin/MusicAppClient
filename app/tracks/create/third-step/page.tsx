import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import UploadTrackButtonsContainer from '@uiComponents/Containers/UploadTrackButtonsContainer';
import UploadTrackMoveButton from '@pageComponents/createTrack/UploadTrackMoveButton';
import { FormikAudioInput } from '@uiComponents/inputs/AudioInput';

export default function ThirdStep() {
  return (
    <>
      <WhiteRoundedCard title={'track audio'}>
        <FormikAudioInput name={'audio'} />
      </WhiteRoundedCard>
      <UploadTrackButtonsContainer>
        <UploadTrackMoveButton type={'back'} step={2} link={'/tracks/create/second-step'}>
          Back
        </UploadTrackMoveButton>
        <UploadTrackMoveButton step={2} type={'submit'}>
          Submit
        </UploadTrackMoveButton>
      </UploadTrackButtonsContainer>
    </>
  );
}
