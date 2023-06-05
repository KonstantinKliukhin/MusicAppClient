import { envConfig } from './envConfig';

class UrlParser {
  private readonly prefix: string;

  constructor(prefix: string) {
    this.prefix = envConfig.NEXT_PUBLIC_API_PATH + '/';
  }

  getUrl(path: string): string {
    return this.prefix + path;
  }
}

export const urlParser = new UrlParser(envConfig.NEXT_PUBLIC_API_PATH);
