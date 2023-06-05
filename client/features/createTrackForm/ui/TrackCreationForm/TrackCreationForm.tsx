'use client';

import React, { FC, PropsWithChildren } from 'react';
import { createTrackFormikInitialValues, createTrackFormValidationSchema, useTrackCreationForm } from '../../model';
import { Form, Formik } from 'formik';

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
