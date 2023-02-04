import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import FormikAudioInput from '@uiComponents/inputs/FormikAudioInput';
import UploadTrackButtonsContainer from '@uiComponents/Containers/UploadTrackButtonsContainer';
import UploadTrackMoveButton from '@bzComponents/buttons/UploadTrackMoveButton';

export default function ThirdStep() {
  return (
    <>
      <WhiteRoundedCard title={'Track audio'}>
        <FormikAudioInput name={'audio'} />
      </WhiteRoundedCard>
      <UploadTrackButtonsContainer>
        <UploadTrackMoveButton type={'back'} step={2} link={'/tracks/create/first-step'}>
          Back
        </UploadTrackMoveButton>
        <UploadTrackMoveButton step={2} type={'submit'}>
          Next
        </UploadTrackMoveButton>
      </UploadTrackButtonsContainer>
    </>
  );
}
