'use client';

import React, { FC } from 'react';
import styles from './Stepper.module.scss';
import Step from '../Step';

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

const Stepper: FC<IStepWrapperProps> = (props) => {
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

export default Stepper;
