import React from 'react';
import TrackList from '../../components/pages/tracks/TrackList';
import Link from 'next/link';
import styles from './TracksPage.module.scss';
import Container from '@uiComponents/Containers/Container';
import trackService from '@services/trackService';
import GradientButton from '@uiComponents/buttons/GradientButton';

export default async function TracksPage() {
  const tracks = await trackService.getTracks();

  return (
    <Container>
      <div className={styles.trackPageHeader}>
        <h1 className={styles.title}>Track List</h1>
        <Link href={'/tracks/create/first-step'}>
          <GradientButton>Upload track</GradientButton>
        </Link>
      </div>
      <TrackList tracks={tracks} />
    </Container>
  );
}
