'use client';

import React, { FC } from 'react';
import { useAppSelector } from '@hooks/reduxHooks';
import StepWrapper from '@uiComponents/StepWrapper';
import uploadTrackSteps from './constants/stepsConfig';
import useUploadTrackStepsHandler from '@bzComponents/UploadTrackStepper/hooks/useUploadTrackStepsHandler';

const UploadTrackStepper: FC = () => {
  const { currentStep, allowedSteps } = useAppSelector((state) => state.uploadTrackSteps);
  useUploadTrackStepsHandler();

  return (
    <div>
      <StepWrapper steps={uploadTrackSteps} activeStep={currentStep} allowedSteps={allowedSteps} />
    </div>
  );
};

export default UploadTrackStepper;
