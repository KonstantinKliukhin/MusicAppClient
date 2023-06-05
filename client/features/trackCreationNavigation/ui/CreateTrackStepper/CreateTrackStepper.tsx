'use client';

import React, { FC } from 'react';
import {
  $allowedSteps,
  $currentStep,
  changeCurrentStepEvent,
  stepsConfig,
  useCreateTrackPagesValidation,
} from '../../model';
import { Stepper } from '../../../../shared/ui';
import { useUnit } from 'effector-react/compat';

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
