import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '../styles/layout.css';
import 'swiper/swiper.min.css';
import { DialogProvider } from '../components/ui-kit/dialog/dialog-context';

function MyApp({ Component, pageProps }: AppProps) {
  return <DialogProvider><Component {...pageProps} /></DialogProvider>
}
export default MyApp;
