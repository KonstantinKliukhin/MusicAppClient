import React, {use} from "react";
import { ITrack } from "../../types/entities/track/track";
import TrackList from "../../components/TrackList";
import { inspect } from "util";
import styles = module
import { Button, Container } from "@nextui-org/react";
import Link from "next/link";

const fetchTracks = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`);

  const parsedRes = response.json();
  return parsedRes;
};

export default function TracksPage() {

  // const { data: tracks, isLoading, isError } = useFetchTracksQuery(null);
  //
  // if (!tracks || isLoading) {
  //   return (
  //     <h1>Loading...</h1>
  //   );
  // }

  const tracks = use<ITrack[]>(fetchTracks())

  return (
    <Container>
      <div className={styles.trackPageHeader}>
        <h1 className={styles.title}>Track List</h1>
        <Link href={"/tracks/create"}>
          <Button color={"gradient"}>
            Upload track
          </Button>
        </Link>
      </div>
      <TrackList tracks={tracks} />
    </Container>
  );
}