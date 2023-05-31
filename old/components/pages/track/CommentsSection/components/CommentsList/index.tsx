import React, { FC } from 'react';
import styles from './CommentsList.module.scss';
import CommentItem from '../CommentItem';
import { TrackComment } from '../../../../../../../src/entities/trackComment/model/types/TrackComment';

type PropsType = {
  comments: TrackComment[];
};

const CommentsList: FC<PropsType> = (props) => {
  return (
    <div className={styles.root}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default CommentsList;
