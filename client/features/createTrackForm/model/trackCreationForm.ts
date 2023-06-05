"use client"

import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { FormikHelpers, useFormikContext } from 'formik';
import { ROUTES } from '../../../../routes';
import { useUnit } from 'effector-react/compat';
import { tracksCreateOneEffect } from '../../../entities/track';
import * as Yup from 'yup';
import { CreateTrackFormikType } from './types';


export const createTrackFormikInitialValues: CreateTrackFormikType = {
  name: '',
  text: '',
  artist: '',
  picture: null,
  audio: null,
};

export const useTrackCreationForm = () => {
  const [createTrack, loading] = useUnit([tracksCreateOneEffect, tracksCreateOneEffect.pending]);
  const router = useRouter();

  const onSubmit = useCallback(
    async (values: CreateTrackFormikType, { setSubmitting }: FormikHelpers<CreateTrackFormikType>) => {
      const picture = values.picture;
      const audio = values.audio;

      if (!picture || !audio) return;

      const newTrack = await createTrack({ ...values, picture, audio });

      setSubmitting(false);

      router.push(`${ROUTES.TRACKS_LIST}/${newTrack.id}`);
    },
    [router],
  );

  return useMemo(() => ({ onSubmit, loading }), [loading, onSubmit]);
};

export const useCanSubmitTrackCreation = () => useFormikContext<CreateTrackFormikType>().isValid;

export const createTrackFormValidationSchema = Yup.object({
  name: Yup.string().required().max(100),
  text: Yup.string().max(10000),
  artist: Yup.string().required().max(100),
  picture: Yup.mixed().nullable().required(),
  audio: Yup.mixed().nullable().required(),
});