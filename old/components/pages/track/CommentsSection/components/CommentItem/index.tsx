import React, { FC } from 'react';
import styles from './CommentItem.module.scss';
import { TrackComment } from '../../../../../../../src/entities/trackComment/model/types/TrackComment';

type PropsType = TrackComment;

const CommentItem: FC<PropsType> = (props) => {
  return (
    <div className={styles.root}>
      <h5 className={styles.commentatorName}>Commentator: {props.username}</h5>
      <p className={styles.comment}>{props.text}</p>
    </div>
  );
};

export default CommentItem;
