import Container from '../../../src/shared/ui/Containers/Container';
import TrackCard from '../../../components/pages/track/TrackCard';
import TrackTextCard from '../../../components/pages/track/TrackTextCard';
import styles from './TrackPage.module.scss';
import TrackService from '../../../src/entities/Track/api';
import CommentsSection from '../../../components/pages/track/CommentsSection';
import { Metadata } from 'next';

type PageParamsType = {
  id: string;
};

type PropsType = {
  params: PageParamsType;
};

export async function generateMetadata({ params }: PropsType): Promise<Metadata> {
  const track = await TrackService.getOneTrack(Number(params.id));

  return {
    title: `Track: ${track.name}`,
    description: 'Bsound tracks list',
    keywords: ['Bsound', 'music', 'tracks', 'sound', 'tracks list'],
  };
}

const TrackPage = async (props: PropsType) => {
  const track = await TrackService.getOneTrack(Number(props.params.id));

  return (
    <Container>
      <div className={styles.root}>
        <TrackCard {...track} />
        {track.text ? <TrackTextCard {...track} /> : null}
        <CommentsSection trackId={track.id} comments={track.comments} />
      </div>
    </Container>
  );
};

export default TrackPage;
