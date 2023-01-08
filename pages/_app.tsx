import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { wrapper } from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, ...rest }: AppProps) {
  const lightTheme = createTheme({
    type: 'light',
  })

  const darkTheme = createTheme({
    type: 'dark',
  })

  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <NextUIProvider>
        <NextThemesProvider
          defaultTheme='system'
          attribute='class'
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
          <Component {...rest.pageProps} {...props.pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  )
}

export default MyApp
