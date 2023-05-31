const revalidateServerRoutePath = (path: string) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_APP_API_PATH!}/api/revalidate`);
  url.searchParams.set('path', path);
  fetch(url);
};

export async function enhancedFetch(
  input: RequestInfo | URL,
  init?: RequestInit & { revalidate?: string[] },
) {
  const res = await fetch(input, init);

  if (init?.revalidate) {
    init.revalidate.forEach(revalidateServerRoutePath);
  }

  return res;
}
