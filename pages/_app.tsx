import { ChakraProvider } from '@chakra-ui/react';
import { AppContext, AppProvider } from 'contexts/App/indext';
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
  return (
    <ChakraProvider>
      <AppProvider
        initialStore={{
          isLoggedIn: false
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </AppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
