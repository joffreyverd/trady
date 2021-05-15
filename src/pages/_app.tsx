import React from 'react';
import Head from 'next/head';
import '../styles/global.scss';
/* eslint-disable no-unused-vars */
import type { AppProps } from 'next/app';
import Header from '../component/header';
import Footer from '../component/footer';

const sections = [
  { title: 'Trady', action: '/' },
  { title: 'Portfolio', action: '/portfolio' },
  { title: 'Operations', action: '/operations' },
  { title: 'Analytics', action: '/analytics' },
  { title: 'Reports', action: '/reports' },
  { title: 'Calendar', action: '/calendar' },
];

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trady</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header logoPath='/logo.png' sections={sections} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
