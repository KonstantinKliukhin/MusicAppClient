import { FC } from 'react';
import Container from '@uiComponents/Containers/Container';
import TrackCard from '@pageComponents/Track/TrackCard';
import TrackTextCard from '@pageComponents/Track/TrackTextCard';
import styles from './TrackPage.module.scss';

const TrackPage: FC = () => {
  return (
    <Container>
      <div className={styles.root}>
        <TrackCard />
        <TrackTextCard />
      </div>
    </Container>
  );
};

export default TrackPage;
