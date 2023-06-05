import { Metadata } from 'next';
import { getOneTrack } from '../../../entities/track';

export async function generateTrackPageMetadata({ params }: {params: {id: string}}): Promise<Metadata> {
  const track = await getOneTrack(Number(params.id));

  return {
    title: `Track: ${track.name}`,
    description: 'Bsound tracks list',
    keywords: ['Bsound', 'music', 'tracks', 'sound', 'tracks list'],
  };
}