import Providers from "./providers";
import DefaultLayout from "../layout/DefaultLayout";
import { PropsWithChildren } from "react";

type PropsType = PropsWithChildren;

export default function RootLayout({ children }: PropsType) {
  return (
    <html lang="en">
    <head>
      <title>BSound</title>
      <meta name="description" content="Best tracks " />
    </head>
    <body>
    <Providers>
      <DefaultLayout>{children}</DefaultLayout>
    </Providers>
    </body>
    </html>
  );
}