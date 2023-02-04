import Providers from './providers';
import DefaultLayout from '../layout/DefaultLayout';
import { PropsWithChildren, Suspense } from 'react';
import '../assets/styles/main.scss';
import Loading from './loading';

type PropsType = PropsWithChildren;

export default function RootLayout({ children }: PropsType) {
  return (
    <html lang='en' className='dark'>
      <head>
        <title>BSound</title>
        <meta name='description' content='Best tracks ' />
      </head>
      <body>
        <Providers>
          <DefaultLayout>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </DefaultLayout>
        </Providers>
      </body>
    </html>
  );
}
