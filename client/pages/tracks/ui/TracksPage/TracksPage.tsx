import Link from 'next/link';
import React from 'react';
import styles from './TracksPage.module.scss';
import { Container, GradientButton } from '../../../../shared/ui';
import { getTracks } from '../../../../entities/track';
import { TracksList } from '../../../../widgets/tracksList';
import { TogglePlayerButton } from '../../../../features/togglePlayer';
import { DeleteTrackButton } from '../../../../features/deleteTrack';
import { SmallTrackProgressView } from '../../../../features/trackProgress';
import { ROUTES } from '../../../../../routes';
import { TracksQueueSetter } from '../../../../features/tracksQueueSetter';

export async function TracksPage() {
  const tracks = await getTracks();

  return (
    <Container>
      <div className={styles.trackPageHeader}>
        <h1 className={styles.title}>Track List</h1>
        <Link href={ROUTES.CREATE_TRACK_FIRST_STEP}>
          <GradientButton>Upload track</GradientButton>
        </Link>
      </div>
      <TracksList
        tracks={tracks}
        cardRightSlot={(track) => <DeleteTrackButton id={track.id} />}
        cardLeftSlot={(track) => <SmallTrackProgressView trackId={track.id} />}
        cardPrevImageSlot={(track) => <TogglePlayerButton data-superjson track={track} />}
      />
      <TracksQueueSetter tracks={tracks} data-superjson />
    </Container>
  );
}