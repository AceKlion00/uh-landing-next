import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/landing.css';
import 'swiper/swiper.min.css';
import { DialogProvider } from '../core/contexts/dialog-context';

function MyApp({ Component, pageProps }: AppProps) {
  return <DialogProvider><Component {...pageProps} /></DialogProvider>
}
export default MyApp;
