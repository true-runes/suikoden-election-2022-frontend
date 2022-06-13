import type { AppProps } from 'next/app'

import { googleTagManagerId } from '@/utils/gtm'
import GoogleTagManager, {
  GoogleTagManagerId,
} from '@/components/common/GoogleTagManager'

import React from 'react'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'

import '@/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const thisApiKey: string = process.env.BUGSNAG_API_KEY || ''

  if (thisApiKey !== '') {
    Bugsnag.start({
      apiKey: thisApiKey,
      plugins: [new BugsnagPluginReact(React)],
    })
  }

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
