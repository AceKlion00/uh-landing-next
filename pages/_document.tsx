import Document, { Html, Head, Main, NextScript } from 'next/document';
import FacebookPixel from '../components/3rd-party/facebook-pixel';
import GoogleAnalytics from '../components/3rd-party/google-analytics';
import GoogleAds from '../components/3rd-party/google-ads';
import MouseFlow from '../components/3rd-party/mouse-flow';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&amp;display=swap" rel="stylesheet" />
        </Head>
        <body>
        <Main />
        <NextScript />
        <FacebookPixel />
        <GoogleAnalytics />
        <GoogleAds />
        <MouseFlow />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
