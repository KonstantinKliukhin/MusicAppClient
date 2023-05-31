import React, { FC } from 'react';
import CommentsList from './components/CommentsList';
import AddComment from './components/AddComment';
import { TrackComment } from '../../../../../src/entities/trackComment/model/types/TrackComment';
import { Track } from '../../../../src/entities/Track/model/types/Track';
import WhiteRoundedCard from '../../../../../src/shared/ui/cards/WhiteRoundedCard';

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
