'use client';

import React, { FC, PropsWithChildren, useCallback } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { REACT_QUERY_KEYS_TYPE } from '@commonTypes/ReactQueryKeys';
import TrackService from '@services/trackService';
import { ROUTES } from '../../../../routes';

export interface ICreateTrackFormik {
  name: string;
  text: string;
  artist: string;
  picture: null | File;
  audio: null | File;
}

const createTrackFormikInitialValues: ICreateTrackFormik = {
  name: '',
  text: '',
  artist: '',
  picture: null,
  audio: null,
};

const Index: FC<PropsWithChildren> = (props) => {
  const router = useRouter();

  const { mutateAsync } = useMutation(REACT_QUERY_KEYS_TYPE.CREATE_TRACK, TrackService.createTrack);

  const onSubmit = useCallback(
    async (values: ICreateTrackFormik, { setSubmitting }: FormikHelpers<ICreateTrackFormik>) => {
      const picture = values.picture;
      const audio = values.audio;

      if (!picture || !audio) return;

      const newTrack = await mutateAsync({ ...values, picture, audio });

      setSubmitting(false);

      router.push(`${ROUTES.TRACKS_LIST}/${newTrack.id}`);
    },
    [mutateAsync, router],
  );

  return (
    <Formik
      initialValues={createTrackFormikInitialValues}
      validationSchema={Yup.object({
        name: Yup.string().required().max(100),
        text: Yup.string().max(10000),
        artist: Yup.string().required().max(100),
        picture: Yup.mixed().nullable().required(),
        audio: Yup.mixed().nullable().required(),
      })}
      validateOnMount={true}
      onSubmit={onSubmit}
    >
      <Form>{props.children}</Form>
    </Formik>
  );
};

export default Index;
