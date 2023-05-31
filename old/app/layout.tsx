import Providers from './providers';
import DefaultLayout from '../../src/shared/ui/layout/Layout';
import { PropsWithChildren, Suspense } from 'react';
import '../../assets/styles/main.scss';
import Loading from './loading';
import { Session } from 'next-auth';

type PropsType = PropsWithChildren & {
  session: Session;
};

export default function RootLayout(props: PropsType) {
  return (
    <html lang='en' className='dark'>
      <head>
        <title>BSound</title>
        <meta name='description' content='Best tracks ' />
      </head>
      <body>
        <Providers session={props.session}>
          <DefaultLayout>
            <Suspense fallback={<Loading />}>{props.children}</Suspense>
          </DefaultLayout>
        </Providers>
      </body>
    </html>
  );
}
