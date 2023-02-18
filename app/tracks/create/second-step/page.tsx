import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import UploadTrackButtonsContainer from '@uiComponents/Containers/UploadTrackButtonsContainer';
import UploadTrackMoveButton from '@pageComponents/createTrack/UploadTrackMoveButton';
import { FormikImageInput } from '@uiComponents/inputs/ImageInput';

export default function SecondStep() {
  return (
    <>
      <WhiteRoundedCard title={'track image'}>
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
