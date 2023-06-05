import { BigTrackInfo, getOneTrack } from '../../../../entities/track';
import { Container, WhiteRoundedCard } from '../../../../shared/ui';
import { TogglePlayerButton } from '../../../../features/togglePlayer';
import styles from './TrackPage.module.scss';
import { SmallTrackProgressView } from '../../../../features/trackProgress';

type PageParamsType = {
  id: string;
};

type PropsType = {
  params: PageParamsType;
};

export async function TrackPage(props: PropsType): Promise<JSX.Element> {
  const track = await getOneTrack(Number(props.params.id));

  return (
    <Container>
      <WhiteRoundedCard className={styles.root} bodyClassName={styles.cardBody}>
        <BigTrackInfo track={track} />

        <WhiteRoundedCard bodyClassName={styles.actionsCardBody}>
          <TogglePlayerButton track={track} />
          <SmallTrackProgressView trackId={track.id} />
        </WhiteRoundedCard>

        {track.text ? <WhiteRoundedCard>{track.text}</WhiteRoundedCard> : null}
      </WhiteRoundedCard>


    </Container>
  );
}