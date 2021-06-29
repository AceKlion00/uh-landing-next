import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='application-name' content='United Hardscapes' />
          <link rel="apple-touch-icon" href="/icons/icon-256.png" />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='United Hardscapes' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-TileColor' content='white' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#07A39D' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&amp;display=swap" rel="stylesheet" />
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
