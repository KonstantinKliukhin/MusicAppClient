import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import { Button, Container } from '@nextui-org/react'
import styles from './TracksPage.module.css'
import { useRouter } from 'next/router'
import TrackList from '../../components/TrackList'
import useAppSelector from '../../hooks/useAppSelector'
import { wrapper } from '../../store'
import { fetchTracks } from '../../store/actions-creators/track'
import { ThunkDispatchType } from '../../store/types/thunkDispatchType'
import { NextPage } from 'next'

const TracksPage: NextPage = () => {
  const router = useRouter()
  const tracks = useAppSelector((state) => state.tracks.tracks)

  return (
    <DefaultLayout>
      <Container>
        <div className={styles.trackPageHeader}>
          <h1 className={styles.title}>Track List</h1>
          <Button onClick={() => router.push('/tracks/create')} color={'gradient'}>
            Upload track
          </Button>
        </div>
        <TrackList tracks={tracks} />
      </Container>
    </DefaultLayout>
  )
}

export default TracksPage

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const thunkDispatch = store.dispatch as ThunkDispatchType
  await thunkDispatch(fetchTracks())

  return {
    props: {},
  }
})
