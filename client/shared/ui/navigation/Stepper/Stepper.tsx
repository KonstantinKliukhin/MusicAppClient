'use client';

import React, { FC } from 'react';
import { Step } from '../Step/Step';
import styles from './Stepper.module.scss';

type StepType = {
  link: string;
  linkText: string | number;
}

interface IStepWrapperProps {
  activeStep: number;
  steps: StepType[];
  allowedSteps: number[];
  onChange?: (step: number) => void;
}

export const Stepper: FC<IStepWrapperProps> = (props) => {
  return (
    <div className={styles.root}>
      {props.steps.map((step, index) => (
        <Step
          onClick={() => props.onChange && props.onChange(index)}
          key={index}
          isActive={props.activeStep === index}
          link={step.link}
          linkText={step.linkText}
          canGo={props.allowedSteps.includes(index)}
        />
      ))}
    </div>
  );
};
