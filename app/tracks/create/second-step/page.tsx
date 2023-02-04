import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import UploadTrackMoveButton from '@bzComponents/buttons/UploadTrackMoveButton';
import UploadTrackButtonsContainer from '@uiComponents/Containers/UploadTrackButtonsContainer';
import FormikImageInput from '@uiComponents/inputs/FormikImageInput';

export default function SecondStep() {
  return (
    <>
      <WhiteRoundedCard title={'Track image'}>
        <FormikImageInput name={'picture'} />
      </WhiteRoundedCard>
      <UploadTrackButtonsContainer>
        <UploadTrackMoveButton type={'back'} step={1} link={'/tracks/create/first-step'}>
          Back
        </UploadTrackMoveButton>
        <UploadTrackMoveButton step={1} type={'next'} link={'/tracks/create/third-step'}>
          Next
        </UploadTrackMoveButton>
      </UploadTrackButtonsContainer>
    </>
  );
}
