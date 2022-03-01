import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ReactElement, ReactNode } from 'react';
import initialize from 'utils/initialize';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    initialize();
  }, []);
  const getLayout = Component.getLayout || ((page) => page);
  return <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>;
}

export default MyApp;
