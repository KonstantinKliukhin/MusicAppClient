// file for exporting all to next js

// layout

export { AppRoot } from './AppRoot';
export { TrackCreation } from '@widgets/trackCreation';
export { AuthRoot } from '@widgets/auth';

// loaders
export { GreenPageLoader } from '@shared/ui';

// pages
export { HomePage, homePageMetadata } from '@pages/home';
export { TracksPage, tracksPageMetaData } from '@pages/tracks';

export { CreateTrackFirstStepPage } from '@pages/createTrackFirstStep';
export { CreateTrackSecondStepPage } from '@pages/createTrackSecondStep';
export { CreateTrackThirdStepPage } from '@pages/createTrackThirdStep';

export { TrackPage, generateTrackPageMetadata } from '@pages/track';

export { SignInPage } from '@pages/signIn';
export { SignUpPage } from '@pages/signUp';

// auth
export { authConfig } from './authConfig';
