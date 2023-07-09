import { enhancedFetch } from '@shared/api/enhancedFecth';
import { envConfig } from '@shared/config';

export const protectedFetch = async (
  ...[input, init]: Parameters<typeof enhancedFetch>
): Promise<Response> => {
  const url = new URL(`${envConfig.NEXT_PUBLIC_APP_API_PATH}/api/protected`);

  const paramsRequestUrl = input instanceof URL ? input.toString() : input;

  url.searchParams.set('url', paramsRequestUrl);

  return enhancedFetch(url, init);
};
