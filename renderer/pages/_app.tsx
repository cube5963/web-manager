import React from 'react'
import type { AppProps } from 'next/app'
import TitleBar from '../components/titlebar'

import 'antd/dist/reset.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <TitleBar />
    <Component {...pageProps} />
  </div>
}

export default MyApp
