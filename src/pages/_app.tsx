import Head from 'next/head';
import 'styles/global.scss';
import Header from 'component/header/header';
import Footer from 'component/footer/footer';
import FiltersButton from 'component/filterButton/filterButton';
import { OperationsProvider } from 'context/operationsContext';
import { ThemeProvider } from 'context/themeContext';
import { PrivacyProvider } from 'context/privacyContext';
import { ToastProvider } from 'context/toastContext';
import { ReactElement } from 'react';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <ThemeProvider>
        <PrivacyProvider>
          <Head>
            <title>Trady</title>
            <link rel='icon' href='/favicon.ico' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>

          <div className='global'>
            <ToastProvider>
              <Header />
              <OperationsProvider>
                <Component {...pageProps} />
                <FiltersButton />
              </OperationsProvider>
              <Footer />
            </ToastProvider>
          </div>
        </PrivacyProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
