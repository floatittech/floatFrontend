import { useState, useEffect } from 'react';
import NavLeft from '../NavBar/NavBarHomePage/NavLeft';
import NavTop from '../NavBar/NavBarHomePage/NavTop'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import Head from "next/head";
import { useRouter } from "next/router";
import LoadingScreen from '../LoadingScreen';

export default function Layout({children}) {
        const { data: session, status } = useSession()
        axios.defaults.headers.common['Authorization'] = `Bearer ${session?.accessToken}`;
        axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL
        const router = useRouter()

        //if(loading) return <LoadingScreen/>

        useEffect(() => {
            if (!session) {
             router.push('/') // redirects if there is no session
            }
            else {
              router.push(router.asPath)
            }
          }, [session, router])

        return (
            <div>
                {status === "loading" ?
                <LoadingScreen/> 
                : 
                <div>
                  <Head><title>Dashboard - Trelo</title></Head>
                  <NavLeft/>
                  <NavTop/>
                  <div className='md:ml-64'>
                    <div className='mx-2.5 md:mx-3 m-auto min-h-screen'>{children}</div>
                  </div>
                </div>
                }  
             </div>

            
            
        )
    }