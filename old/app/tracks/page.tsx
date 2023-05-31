import React from 'react';
import TrackList from '../../components/pages/tracks/TrackList';
import Link from 'next/link';
import styles from './TracksPage.module.scss';
import Container from '../../src/shared/ui/Containers/Container';
import trackService from '../../src/entities/Track/api';
import GradientButton from '../../../src/shared/ui/buttons/GradientButton';
import { Metadata } from 'next';
import { ROUTES } from '../../../routes';
import TracksManager from '../../components/business/TracksManager';

export const metadata: Metadata = {
  title: 'Tracks list',
  description: 'Bsound tracks list',
  keywords: ['Bsound', 'music', 'tracks', 'sound', 'tracks list'],
};

export default async function TracksPage() {
  const tracks = await trackService.getTracks();

  return (
    <Container>
      <div className={styles.trackPageHeader}>
        <h1 className={styles.title}>Track List</h1>
        <Link href={ROUTES.CREATE_TRACK_FIRST_STEP}>
          <GradientButton>Upload track</GradientButton>
        </Link>
      </div>
      <TrackList tracks={tracks} />
      <TracksManager tracks={tracks} />
    </Container>
  );
}
