import { PropsWithChildren } from 'react';
import Container from '../../../src/shared/ui/Containers/Container';
import styles from './create.module.scss';
import CreateTrackFormik from '../../../components/pages/createTrack/CreateTrackFormik';
import UploadTrackStepper from '../../../components/pages/createTrack/UploadTrackStepper';

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
