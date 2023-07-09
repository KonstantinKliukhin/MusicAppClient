import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';

const secret = process.env.NEXTAUTH_SECRET;

async function fetchNextRequest(req: NextRequest): Promise<Response> {
  const url = new URL(req.url);
  const urlToRequest = url.searchParams.get('url');
  if (!urlToRequest)
    return new Response(null, {
      status: 400,
      statusText: "URL didn't provided in search parameters",
    });

  let body = null;
  const contentType = req.headers?.get('Content-Type');

  if (contentType?.includes('multipart/form-data')) {
    body = await req.formData();
  }

  if (contentType?.includes('application/json')) {
    body = await req.json();
  }

  req.headers.delete('Content-Type');
  req.headers.delete('transfer-encoding');

  return fetch(urlToRequest, { headers: req.headers, method: req.method, body: body });
}

async function handleAuthProtectedRequest(req: NextRequest): Promise<Response> {
  const token = await getToken({ req, secret });
  const session = await getSession({ req: req as any });

  if (!token || !session) return redirect('http://localhost:3000/auth/sign-in');

  req.cookies.set('token', (token as any).token);

  return fetchNextRequest(req);
}

export const GET = handleAuthProtectedRequest;
export const POST = handleAuthProtectedRequest;
export const PUT = handleAuthProtectedRequest;
export const DELETE = handleAuthProtectedRequest;
export const PATCH = handleAuthProtectedRequest;
export const HEAD = handleAuthProtectedRequest;
export const OPTIONS = handleAuthProtectedRequest;
