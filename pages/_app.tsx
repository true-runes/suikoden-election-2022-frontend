import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { googleTagManagerId } from '../utils/gtm'
import GoogleTagManager, {
  GoogleTagManagerId,
} from '../components/GoogleTagManager'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
