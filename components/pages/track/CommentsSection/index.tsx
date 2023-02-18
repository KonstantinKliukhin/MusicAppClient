import React, { FC } from 'react';
import CommentsList from '@pageComponents/track/CommentsSection/components/CommentsList';
import AddComment from './components/AddComment';
import { ITrackComment } from '@entities/track/TrackComment';
import { ITrack } from '@entities/track/Track';
import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';

type PropsType = { comments: ITrackComment[]; trackId: ITrack['id'] };

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
