import Head from 'next/head';
import 'styles/global.scss';
import Header from 'component/header';
import Footer from 'component/footer';
import OverlayFilter from 'component/overlayFilter';
import sections from 'utils/sections';
import { OperationsProvider } from 'context/operationsContext';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trady</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='global'>
        <Header logoPath='/logo.png' sections={sections} />
        <OperationsProvider>
          <Component {...pageProps} />
          <OverlayFilter />
        </OperationsProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
