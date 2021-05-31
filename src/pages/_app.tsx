import Head from 'next/head';
import 'styles/global.scss';
import Header from 'component/header/header';
import Footer from 'component/footer/footer';
import FiltersButton from 'component/filterButton/filterButton';
import { OperationsProvider } from 'context/operationsContext/operationsContext';
import { ThemeProvider } from 'context/themeContext/themeContext';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider>
        <Head>
          <title>Trady</title>
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <div className='global'>
          <Header />
          <OperationsProvider>
            <Component {...pageProps} />
            <FiltersButton />
          </OperationsProvider>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
