import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { MantineProvider } from '@mantine/core';
import { customTheme } from '@/theme';
import {QueryClientProvider,QueryClient} from "@tanstack/react-query"
const queryClient = new QueryClient()
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
      <QueryClientProvider client={queryClient}>

        <MantineProvider theme={customTheme}>
          <Component {...pageProps} />
        </MantineProvider>
      </QueryClientProvider>
      </main>
    </>
  );
}

export default CustomApp;
