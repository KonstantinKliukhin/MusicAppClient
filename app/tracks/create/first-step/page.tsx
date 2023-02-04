import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import FormikTextInput from '@uiComponents/inputs/FormikTextInput';
import FormikTexAreaInput from '@uiComponents/inputs/FormikTexAreaInput';
import UploadTrackButtonsContainer from '@uiComponents/Containers/UploadTrackButtonsContainer';
import UploadTrackMoveButton from '@bzComponents/buttons/UploadTrackMoveButton';

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
