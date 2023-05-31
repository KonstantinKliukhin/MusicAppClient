import { IStep } from '@uiComponents/StepWrapper/type';
import { ROUTES } from '../../../../../../routes';

const uploadTrackSteps: IStep[] = [
  {
    link: ROUTES.CREATE_TRACK_FIRST_STEP,
    linkText: 1,
  },
  {
    link: ROUTES.CREATE_TRACK_SECOND_STEP,
    linkText: 2,
  },
  {
    link: ROUTES.CREATE_TRACK_THIRD_STEP,
    linkText: 3,
  },
];
export default uploadTrackSteps;
