import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import FormikTextInput from '@uiComponents/formikInputs/FormikTextInput';
import FormikTexAreaInput from '@uiComponents/formikInputs/FormikTexAreaInput';
import UploadTrackButtonsContainer from '@uiComponents/Containers/UploadTrackButtonsContainer';
import UploadTrackMoveButton from '@pageComponents/createTrack/UploadTrackMoveButton';

export default function FirstStep() {
  return (
    <>
      <WhiteRoundedCard title={'Track name'}>
        <FormikTextInput name={'name'} />
      </WhiteRoundedCard>

      <WhiteRoundedCard title={'Artist name'}>
        <FormikTextInput name={'artist'} />
      </WhiteRoundedCard>

      <WhiteRoundedCard title={'Track text'}>
        <FormikTexAreaInput name={'text'} />
      </WhiteRoundedCard>
      <UploadTrackButtonsContainer>
        <UploadTrackMoveButton step={0} type={'next'} link={'/tracks/create/second-step'}>
          Next
        </UploadTrackMoveButton>
      </UploadTrackButtonsContainer>
    </>
  );
}
