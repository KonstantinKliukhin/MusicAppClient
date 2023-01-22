import React from 'react'
import TrackList from '../../components/business/TrackList'
import Link from 'next/link'
import styles from './TracksPage.module.scss'
import Container from '@uiComponents/Container'
import trackService from '@services/trackService'

export default async function TracksPage() {
  const tracks = await trackService.getTracks();

  return (
    <Container>
      <div className={styles.trackPageHeader}>
        <h1 className={styles.title}>Track List</h1>
        <Link href={"/tracks/create"}>
          <button className={styles.createTrackButton}>
            Upload track
          </button>
        </Link>
      </div>
      <TrackList tracks={tracks} />
    </Container>
  );
}