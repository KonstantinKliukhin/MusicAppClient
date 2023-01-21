"use client";

import { useServerInsertedHTML } from "next/navigation";
import { createTheme, CssBaseline, NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import ReduxProvider from "../providers/reduxProvider";

type PropsType = PropsWithChildren;

export default function Providers({ children }: PropsType) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>;
  });

  const lightTheme = createTheme({
    type: 'light',
  })

  const darkTheme = createTheme({
    type: 'dark',
  })

  return ( // you can have multiple client side providers wrapped, in this case I am also using NextUIProvider
    <>
      <ReduxProvider>
        <NextThemesProvider
          defaultTheme='system'
          attribute='class'
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
        <NextUIProvider>{children}</NextUIProvider>
        </NextThemesProvider>
      </ReduxProvider>
    </>
  );
}