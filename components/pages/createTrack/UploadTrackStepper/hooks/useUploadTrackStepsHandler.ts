import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { ICreateTrackFormik } from '../../../../../providers/CreateTrackFormikProvider';
import useActions, { useAppSelector } from '@hooks/reduxHooks';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import uploadTrackSteps from '../constants/stepsConfig';

const useUploadTrackStepsHandler = (): void => {
  const { values, errors, dirty } = useFormikContext<ICreateTrackFormik>();
  const route = useSelectedLayoutSegment();
  const validSteps = useAppSelector((state) => state.uploadTrackSteps.validSteps);
  const allowedSteps = useAppSelector((state) => state.uploadTrackSteps.allowedSteps);
  const { addValidStep, deleteValidStep, changeUploadTrackStep } = useActions();
  const router = useRouter();

  useEffect(
    function redirectOnNotAllowedPage() {
      if (!route) return;
      const currentPageStep = uploadTrackSteps.findIndex((step) => step.link.includes(route));

      if (currentPageStep === -1) return;

      if (!allowedSteps.includes(currentPageStep)) {
        const lastAllowedStep = allowedSteps[allowedSteps.length - 1];
        const newPath = uploadTrackSteps[lastAllowedStep].link;
        router.replace(newPath);
      }
    },
    [allowedSteps, route],
  );

  useEffect(() => {
    if (!route) return;
    const newCurrentStep = uploadTrackSteps.findIndex((step) => step.link.includes(route));
    if (newCurrentStep === -1) return;

    changeUploadTrackStep(newCurrentStep);
  }, [route]);

  useEffect(
    function manageValidStepsDueFormik() {
      if (!Object.keys(errors).length && !dirty) return;
      const isFirstInValidSteps = validSteps.includes(0);
      const isSecondInValidSteps = validSteps.includes(1);
      const isThirdInValidSteps = validSteps.includes(2);

      if (!errors.name?.length && !errors.artist?.length && !isFirstInValidSteps) {
        addValidStep(0);
      } else if ((values.name.length || values.artist.length) && isFirstInValidSteps) {
        deleteValidStep(0);
      }

      if (!errors.picture?.length && !isSecondInValidSteps) {
        addValidStep(1);
      } else if (errors.picture?.length && isSecondInValidSteps) {
        deleteValidStep(1);
      }

      if (!errors.audio?.length && !isThirdInValidSteps) {
        addValidStep(2);
      } else if (errors.audio?.length && isThirdInValidSteps) {
        deleteValidStep(2);
      }
    },
    [errors],
  );
};

export default useUploadTrackStepsHandler;
