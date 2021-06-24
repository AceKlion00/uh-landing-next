import type { AppProps } from 'next/app';
import 'swiper/swiper.min.css';
import '../styles/globals.css';
import '../styles/layout.css';

import { DialogProvider } from '../components/ui-kit/dialog/dialog-context';
import ErrorPage from '../components/error-page';
import FacebookPixel from '../components/3rd-party/facebook-pixel';
import GoogleAnalytics from '../components/3rd-party/google-analytics';
import GoogleAds from '../components/3rd-party/google-ads';
import MouseFlow from '../components/3rd-party/mouse-flow';

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.error) {
    return <ErrorPage statusCode={pageProps.error.statusCode} message={pageProps.error.message} />
  }
  return <DialogProvider>
    <Component {...pageProps} />
    <FacebookPixel />
    <GoogleAnalytics />
    <GoogleAds />
    <MouseFlow />
  </DialogProvider>
}
export default MyApp;
