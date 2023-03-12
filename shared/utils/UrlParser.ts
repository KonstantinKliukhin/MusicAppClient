class UrlParser {
  private readonly _url: string;

  constructor(url: string) {
    this._url = process.env.NEXT_PUBLIC_API_PATH + '/' + url;
  }

  get url(): string {
    return this._url;
  }
}

export default UrlParser;
