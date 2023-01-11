import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
      <Head> <title>Topdoc</title><link rel='icon' type='image/gif' href='leveinard.png'/></Head>
      <Component {...pageProps} />
  </>
}
