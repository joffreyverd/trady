import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import '../styles/global.scss';
/* eslint-disable no-unused-vars */
import type { AppProps } from 'next/app';
import Header from '../component/header';
import Footer from '../component/footer';
import OverlayFilter from '../component/overlayAction';
import data from '../assets/operations.json';
import sections from '../utils/sections';
import filter from '../helper/filter';

function App({ Component, pageProps }: AppProps) {
  const [operations, setOperations] = useState(data);
  const [onlyShowOpen, toggleOnlyShowOpen] = useState(false);
  const [year, setYear] = useState('');
  const isActiveFilter = year !== '' || onlyShowOpen;

  useEffect(() => {
    const filters = { onlyShowOpen: onlyShowOpen, year: year };
    filter.updateFilters(filters, data, setOperations);
  }, [onlyShowOpen, year]);

  const options = filter.getOptions(
    { onlyShowOpen, toggleOnlyShowOpen },
    { year, setYear },
    data,
  );

  return (
    <>
      <Head>
        <title>Trady</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header logoPath='/logo.png' sections={sections} />
      <Component {...pageProps} dataSet={operations} />
      <OverlayFilter
        title='Filters'
        options={options}
        isActive={isActiveFilter}
      />
      <Footer />
    </>
  );
}

export default App;
