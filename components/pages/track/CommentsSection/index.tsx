import React, { FC } from 'react';
import CommentsList from '@pageComponents/track/CommentsSection/components/CommentsList';
import AddComment from './components/AddComment';
import { ITrackComment } from '@entities/track/TrackComment';
import { ITrack } from '@entities/track/Track';

type PropsType = { comments: ITrackComment[]; trackId: ITrack['id'] };

const CommentsSection: FC<PropsType> = (props) => {
  return (
    <section>
      <CommentsList comments={props.comments} />
      <AddComment trackId={props.trackId} />
    </section>
  );
};

export default CommentsSection;
