import { envConfig } from '@shared/config';

export class UrlParser {
  private readonly prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix + '/';
  }

  getUrl(path: string): string {
    return this.prefix + path;
  }
}

export const urlParser = new UrlParser(envConfig.NEXT_PUBLIC_API_PATH);
