'use client';

import { Form, Formik } from 'formik';
import React, { FC, PropsWithChildren } from 'react';
import { createTrackFormikInitialValues, createTrackFormValidationSchema, useTrackCreationForm } from '../../model';

export const TrackCreationForm: FC<PropsWithChildren> = props => {
  const { onSubmit } = useTrackCreationForm();

  return (
    <Formik
      initialValues={createTrackFormikInitialValues}
      validationSchema={createTrackFormValidationSchema}
      validateOnMount={true}
      onSubmit={onSubmit}
    >
      <Form>{props.children}</Form>
    </Formik>
  );
};
