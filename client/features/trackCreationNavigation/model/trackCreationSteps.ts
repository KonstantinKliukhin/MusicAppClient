'use client';
import { createEvent, createStore } from 'effector/compat';
import { useUnit, useStoreMap } from 'effector-react';
import { useFormikContext } from 'formik';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import { useEffect } from 'react';
import { CreateTrackFormikType } from '@features/createTrack';
import { pagesFieldsMap, stepsConfig } from './constants';

export const changeCurrentStepEvent = createEvent<number>();
export const markStepValidEvent = createEvent<number>();

export const $currentStep = createStore(0).on(changeCurrentStepEvent, (_, step) => step);

export const $allowedSteps = createStore<number[]>([0]).on(
  markStepValidEvent,
  (allowedSteps, step) => {
    return Array.from(new Set([...allowedSteps, step + 1]));
  },
);

export const useCanGo = (step: number) =>
  useStoreMap($allowedSteps, (state) => state.includes(step));

export const useCreateTrackPagesValidation = () => {
  const [currentStep, allowedSteps] = useUnit([$currentStep, $allowedSteps]);
  const route = useSelectedLayoutSegment();
  const router = useRouter();
  const { errors, touched } = useFormikContext<CreateTrackFormikType>();

  const checkField = (field: keyof CreateTrackFormikType): boolean =>
    Boolean(!errors[field] && touched[field]);

  useEffect(() => {
    pagesFieldsMap.forEach((pageFields, index) => {
      if (!pageFields.every(checkField)) {
        // markStepInvalidEvent(index);
      } else {
        markStepValidEvent(index);
      }
    });
  }, [errors, touched]);

  useEffect(
    function redirectFromInvalidStep() {
      if (!route) return;
      const stepByRoute = stepsConfig.findIndex((item) => item.link.includes(route));

      if (allowedSteps.includes(stepByRoute)) return;

      router.replace(stepsConfig[currentStep].link);
    },
    [route, currentStep, allowedSteps.length],
  );
};
