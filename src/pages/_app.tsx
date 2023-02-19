import { Roboto } from '@next/font/google'
import { NextPage } from 'next'
import { AppType, type AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement, type ReactNode } from 'react'

import '~/styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'],
  preload: false,
  variable: '--font-roboto'
})

type DefaultLayoutProps = { children: ReactNode }

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name='description' content='Generated by create next app' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main
      className={`${roboto.variable} font-sans h-screen w-screen flex flex-col justify-center items-center bg-zinc-800 text-zinc-100`}
    >
      {children}
    </main>
  </>
)

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = (({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? (page => <DefaultLayout>{page}</DefaultLayout>)

  return getLayout(<Component {...pageProps} />)
}) as AppType

export default App
