import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'
import axios from 'axios'
import Head from "next/head";
import { useRouter } from "next/router";
import LoadingScreen from '../LoadingScreen';
import Image from 'next/image'
import TopNavBar from '../NavBar/NavBarWorkFlow/TopNavBar';

export default function LayoutWorkFlow({children}) {
        const { data: session, status } = useSession()
        const loading = status === 'loading'
        axios.defaults.headers.common['Authorization'] = `Bearer ${session?.accessToken}`;
        axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL
        const router = useRouter()

        //if(loading) return <LoadingScreen/>

        useEffect(() => {
            if (loading) {
             <LoadingScreen/>
            }

            else if (!session) {
              router.push('/') // redirects if there is no session
             }

            else if (router.isReady) {
              router.push(router.asPath)
            }
            else null
          }, [session])

        return (
            <div>
                {status === "loading" ?
                <LoadingScreen/> 
                : 
                <div>
                  <Head><title>Dashboard - Trelo</title></Head>
                  
                  <TopNavBar/>

                  <div className=''>{children}</div>
                </div>
                }  
             </div>

            
            
        )
    }