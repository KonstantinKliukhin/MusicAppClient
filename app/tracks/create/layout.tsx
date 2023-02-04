import UploadTrackStepper from '@bzComponents/UploadTrackStepper';
import { PropsWithChildren } from 'react';
import Container from '@uiComponents/Containers/Container';
import styles from './create.module.scss';
import CreateTrackFormikProvider from '../../../providers/createTrackFormikProvider';

type PropsType = PropsWithChildren;

export default function CreateLayout(props: PropsType) {
  return (
    <Container>
      <CreateTrackFormikProvider>
        <UploadTrackStepper />
        <div className={styles.content}>{props.children}</div>
      </CreateTrackFormikProvider>
    </Container>
  );
}
