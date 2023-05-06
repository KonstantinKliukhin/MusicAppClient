import React, { FC } from 'react';
import CommentsList from '@pageComponents/track/CommentsSection/components/CommentsList';
import AddComment from './components/AddComment';
import { TrackComment } from '@entities/track/TrackComment';
import { Track } from '@entities/track/Track';
import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';

type PropsType = { comments: TrackComment[]; trackId: Track['id'] };

const CommentsSection: FC<PropsType> = (props) => {
  return (
    <section>
      <WhiteRoundedCard title='Comments'>
        <CommentsList comments={props.comments} />
        <AddComment trackId={props.trackId} />
      </WhiteRoundedCard>
    </section>
  );
};

export default CommentsSection;
