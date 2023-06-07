'use client';

import { useUnit } from 'effector-react/compat';
import React, { FC } from 'react';
import { Stepper } from '../../../../shared/ui';
import {
  $allowedSteps,
  $currentStep,
  changeCurrentStepEvent,
  stepsConfig,
  useCreateTrackPagesValidation,
} from '../../model';

export const CreateTrackStepper: FC = () => {
  const [currentStep, allowedSteps] = useUnit([$currentStep, $allowedSteps]);
  useCreateTrackPagesValidation();

  return <Stepper
    activeStep={currentStep}
    allowedSteps={allowedSteps}
    steps={stepsConfig}
    onChange={(i) => changeCurrentStepEvent(i)}
  />;
};
