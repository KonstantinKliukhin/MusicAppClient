import { PropsWithChildren } from 'react';
import Container from '@uiComponents/Containers/Container';
import styles from './create.module.scss';
import CreateTrackFormik from '@pageComponents/createTrack/CreateTrackFormik';
import UploadTrackStepper from '@pageComponents/createTrack/UploadTrackStepper';

type PropsType = PropsWithChildren;

export default function CreateLayout(props: PropsType) {
  return (
    <Container>
      <CreateTrackFormik>
        <UploadTrackStepper />
        <div className={styles.content}>{props.children}</div>
      </CreateTrackFormik>
    </Container>
  );
}
