import { ROUTES } from '@shared/config/routes';
import { CreateTrackFormikType } from '../model/index';

export const pagesFieldsMap: (keyof CreateTrackFormikType)[][] = [
  ['name', 'artist'],
  ['picture'],
  ['audio'],
];

export const stepsConfig: { link: string; linkText: string | number }[] = [
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
