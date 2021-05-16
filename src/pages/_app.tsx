import React, { useState } from 'react';
import Head from 'next/head';
import '../styles/global.scss';
/* eslint-disable no-unused-vars */
import type { AppProps } from 'next/app';
import Header from '../component/header';
import Footer from '../component/footer';
import OverlayFilter from '../component/overlayAction';
import data from '../assets/operations.json';

const sections = [
  { title: 'Trady', action: '/' },
  { title: 'Portfolio', action: '/portfolio' },
  { title: 'Operations', action: '/operations' },
  { title: 'Analytics', action: '/analytics' },
  { title: 'Reports', action: '/reports' },
  { title: 'Calendar', action: '/calendar' },
];

function App({ Component, pageProps }: AppProps) {
  const [operations, setOperations] = useState(data);

  function updateFilters(onlyShowOpen, year): void {
    const filteredData = data.filter((singleData) => {
      if (onlyShowOpen && singleData.status !== 'Open') {
        return '';
      }
      const openYear = new Date(singleData.open).getFullYear();
      if (year !== '' && openYear !== parseInt(year, 10)) {
        return '';
      }
      return singleData;
    });
    setOperations(filteredData);
  }

  const years = [];
  data.map((operation) => {
    const openYear = new Date(operation.open).getFullYear();
    if (!years.includes(openYear)) {
      years.push(openYear);
    }
  });

  return (
    <>
      <Head>
        <title>Trady</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header logoPath='/logo.png' sections={sections} />
      <Component {...pageProps} dataSet={operations} />
      <OverlayFilter title='Filters' actionOnChange={updateFilters} years={years} />
      <Footer />
    </>
  );
}

export default App;
