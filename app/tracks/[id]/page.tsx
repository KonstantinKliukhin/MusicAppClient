import Container from '@uiComponents/Containers/Container';
import TrackCard from '@pageComponents/track/TrackCard';
import TrackTextCard from '@pageComponents/track/TrackTextCard';
import styles from './TrackPage.module.scss';
import TrackService from '@services/trackService';
import CommentsSection from '@pageComponents/track/CommentsSection';

type PropsType = {
  params: {
    id: string;
  };
};
const TrackPage = async (props: PropsType) => {
  const track = await TrackService.getOneTrack(props.params.id);

  return (
    <Container>
      <div className={styles.root}>
        <TrackCard {...track} />
        <TrackTextCard {...track} />
        <CommentsSection trackId={track.id} comments={track.comments} />
      </div>
    </Container>
  );
};

export default TrackPage;
