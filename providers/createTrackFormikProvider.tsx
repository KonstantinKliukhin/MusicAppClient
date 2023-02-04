'use client';

import React, { FC, PropsWithChildren, useTransition } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import createTrack from '@services/trackService/createTrack';
import { useRouter } from 'next/navigation';

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

const CreateTrackFormikProvider: FC<PropsWithChildren> = (props) => {
  const router = useRouter();
  const [_isPending, startTransition] = useTransition();

  return (
    <Formik
      initialValues={createTrackFormikInitialValues}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        text: Yup.string(),
        artist: Yup.string().required(),
        picture: Yup.mixed().nullable().required(),
        audio: Yup.mixed().nullable().required(),
      })}
      validateOnMount={true}
      onSubmit={async (values, { setSubmitting }) => {
        const picture = values.picture;
        const audio = values.audio;

        if (!picture || !audio) return;

        await createTrack({ ...values, picture, audio });
        setSubmitting(false);

        startTransition(() => {
          router.refresh();
        });
      }}
    >
      <Form>{props.children}</Form>
    </Formik>
  );
};

export default CreateTrackFormikProvider;
