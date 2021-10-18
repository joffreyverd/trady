import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const csp = 'default-src * data:; style-src \'self\' \'unsafe-inline\' *.googleapis.com; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' *.tradingview.com;';

    return (
      <Html>
        <Head>
          <meta httpEquiv='Content-Security-Policy' content={csp} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
