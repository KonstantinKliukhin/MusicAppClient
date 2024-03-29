import Link from 'next/link';
import React from 'react';
import { TogglePlayerButton } from '@features/player/togglePlayer';
import { SmallTrackProgressView } from '@features/player/trackProgress';
import { DeleteTrackButton } from '@features/track/deleteTrack';
import { getTracks, TracksList, tracksQueueSetQueueEvent } from '@entities/track';
import { ROUTES } from '@shared/config/routes';
import { EffectorSetter } from '@shared/lib';
import { Container, GradientButton } from '@shared/ui';
import styles from './TracksPage.module.scss';

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
      <EffectorSetter payload={tracks} setter={tracksQueueSetQueueEvent} data-superjson />
    </Container>
  );
}
