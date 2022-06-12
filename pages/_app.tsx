import type { AppProps } from 'next/app'

import { googleTagManagerId } from '@/utils/gtm'
import GoogleTagManager, {
  GoogleTagManagerId,
} from '@/components/GoogleTagManager'

import '@/styles/globals.scss'

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
