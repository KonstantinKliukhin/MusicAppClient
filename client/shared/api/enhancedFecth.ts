type CustomRequestInitType = RequestInit & { revalidate?: string[]; waitRevalidate?: boolean };

const revalidateServerRoutePath = async (path: string, wait: boolean): Promise<void> => {
  const url = new URL(`${process.env.NEXT_PUBLIC_APP_API_PATH!}/api/revalidate`);
  url.searchParams.set('path', path);
  wait ? await fetch(url) : fetch(url);
};

export async function enhancedFetch(
  input: string | URL,
  init?: CustomRequestInitType,
): Promise<Response> {
  const res = await fetch(input, init);

  if (init?.revalidate) {
    const waitRevalidate = init.waitRevalidate || false;
    if (!waitRevalidate) {
      init.revalidate.forEach((path) => revalidateServerRoutePath(path, false));
    } else {
      await Promise.all(init.revalidate.map((path) => revalidateServerRoutePath(path, true)));
    }
  }

  return res;
}
