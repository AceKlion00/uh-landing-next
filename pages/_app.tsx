import type { AppProps } from 'next/app'

import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/landing.css'
import 'swiper/swiper.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
