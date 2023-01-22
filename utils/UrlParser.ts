
class UrlParser {
  private readonly _url: string;

  constructor(url: string) {
    this._url = url
  }

  get url(): string {
    return process.env.NEXT_PUBLIC_API_PATH + '/' + this._url;
  }
}

export default UrlParser