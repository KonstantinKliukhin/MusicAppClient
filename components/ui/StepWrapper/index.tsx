'use client';

import React, { FC } from 'react';
import styles from './StepWrapper.module.scss';
import Step from './components/Step';
import { IStep } from './type';

interface IStepWrapperProps {
  activeStep: number;
  steps: IStep[];
  allowedSteps: number[];
}

const StepWrapper: FC<IStepWrapperProps> = (props) => {
  return (
    <div className={styles.root}>
      {props.steps.map((step, index) => (
        <Step
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

export default StepWrapper;
