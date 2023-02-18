import React, { FC } from 'react';
import styles from './CommentsList.module.scss';
import CommentItem from '@pageComponents/track/CommentsSection/components/CommentItem';
import { ITrackComment } from '@entities/track/TrackComment';

type PropsType = {
  comments: ITrackComment[];
};

const CommentsList: FC<PropsType> = (props) => {
  return (
    <ul className={styles.root}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
