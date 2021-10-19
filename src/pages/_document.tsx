import { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  private csp = 'default-src * data:; style-src \'self\' \'unsafe-inline\' *.googleapis.com; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' *.tradingview.com;';

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <meta httpEquiv='Content-Security-Policy' content={this.csp} />
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
