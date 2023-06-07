// file for exporting all to next js

// layout

export { AppRoot } from './appRoot';
export { TrackCreation } from '../processes/trackCreation';
export { AuthRoot } from './auth';

// loaders
export { GreenPageLoader } from '../shared/ui';

// pages
export { HomePage, homePageMetadata } from '../pages/home';
export { TracksPage, tracksPageMetaData } from '../pages/tracks';

export { CreateTrackFirstStepPage } from '../pages/createTrackFirstStep';
export { CreateTrackSecondStepPage } from '../pages/createTrackSecondStep';
export { CreateTrackThirdStepPage } from '../pages/createTrackThirdStep';

export { TrackPage, generateTrackPageMetadata } from '../pages/track';

export { SignInPage } from '../pages/signIn';
export { SignUpPage } from '../pages/signUp';

// auth
export { authMiddlewareConfig } from './auth';
export { authConfig } from '@entities/auth';
