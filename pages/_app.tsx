import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '../styles/layout.css';
import 'swiper/swiper.min.css';
import { DialogProvider } from '../components/ui-kit/dialog/dialog-context';
import ErrorPage from '../components/error-page';

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.error) {
    return <ErrorPage statusCode={pageProps.error.statusCode} message={pageProps.error.message} />
  }
  return <DialogProvider><Component {...pageProps} /></DialogProvider>
}
export default MyApp;
