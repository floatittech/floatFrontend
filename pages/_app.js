import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import axios from 'axios'
import { SWRConfig } from "swr";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { Auth } from '../components/auth';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <div className="font-Nunito bg-gray-100 min-h-screen ">
      <Head>
        <title>Float</title>
        <link rel="icon" href="/logo.svg"/>
      </Head>
      <NextNProgress color='linear-gradient(to right, rgb(233, 213, 255), rgb(192, 132, 252), rgb(107, 33, 168))' />
      
      <SessionProvider session={pageProps.session}>
        { Component.auth ? ( 
          <Auth> 
            <SWRConfig value={{revalidateOnFocus: false, revalidateIfStale: false, 
              fetcher : async (url) => await axios.get(url).then((res) => res.data)}}>
                {getLayout(<Component {...pageProps} />)}
            </SWRConfig>
          </Auth> 
          ) : (
          <Component {...pageProps} />
          )
        }
      </SessionProvider>

    </div>
  )
}

export default MyApp
