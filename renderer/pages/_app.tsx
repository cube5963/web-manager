import React from 'react'
import type { AppProps } from 'next/app'
import TitleBar from '../components/titlebar'
import { Layout } from 'antd'

import 'antd/dist/reset.css'
import '../styles/globals.css'

const mainstyle = {
  height: '100vh',
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout style={mainstyle}>
    <TitleBar />
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
