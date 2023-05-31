'use client';

import React, { FC, useCallback } from 'react';
import styles from './AddComment.module.scss';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { REACT_QUERY_KEYS_TYPE } from '../../../../../../types/common/ReactQueryKeys';
import TrackService from '../../../../../../src/entities/Track/api';
import { FormikTextInput } from '../../../../../../../src/shared/ui/inputs/TextInput';
import { FormikTextAreaInput } from '../../../../../../../src/shared/ui/inputs/TextAreaInput';
import PinkButton from '../../../../../../../src/shared/ui/buttons/PinkButton';
import { Track } from '../../../../../../src/entities/Track/model/types/Track';
import * as Yup from 'yup';

interface ICreateCommentFormik {
  name: string;
  comment: string;
}

type PropsType = {
  trackId: Track['id'];
};

const createTrackFormikInitialValues: ICreateCommentFormik = { name: '', comment: '' };

const AddComment: FC<PropsType> = (props) => {
  const router = useRouter();

  const { mutate } = useMutation(REACT_QUERY_KEYS_TYPE.COMMENTS, TrackService.createTrackComment, {
    onSuccess: () => router.refresh(),
  });

  const onSubmit = useCallback(
    (values: ICreateCommentFormik) => {
      if (!props.trackId) return;
      mutate({ trackId: props.trackId, comment: { username: values.name, text: values.comment } });
    },
    [props.trackId],
  );

  return (
    <Formik
      initialValues={createTrackFormikInitialValues}
      onSubmit={onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().trim().required().max(100),
        comment: Yup.string().trim().required().max(1000),
      })}
    >
      <Form className={styles.root}>
        <FormikTextInput labelClassName={styles.label} name={'name'} label='Your name' />
        <FormikTextAreaInput labelClassName={styles.label} name={'comment'} label='Your comment' />
        <PinkButton className={styles.button} type={'submit'}>
          Add comment
        </PinkButton>
      </Form>
    </Formik>
  );
};

export default AddComment;
