import IURLParse from '@commonTypes/urlParser';

class UrlParser implements IURLParse {
  private readonly prefix: string;

  constructor(prefix: string | undefined) {
    if (!prefix) throw new Error("Prefix didn't provided");
    this.prefix = process.env.NEXT_PUBLIC_API_PATH + '/';
  }

  getUrl(path: string): string {
    return this.prefix + path;
  }
}

const urlParser = new UrlParser(process.env.NEXT_PUBLIC_API_PATH);

export default urlParser;
