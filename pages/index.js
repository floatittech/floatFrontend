import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from "next/image";
import GoogleButton from 'react-google-button'
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {

  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

  // if(loading) return <LoadingScreen/>

  if(session && status === 'authenticated'){
    router.push("/workfloat");
  }

  return (
    <>
    {session && status === 'authenticated' ? <LoadingScreen/> 
    : 
    <div className="flex justify-center h-screen items-center">
    <GoogleButton onClick={() => signIn("google", { callbackUrl: '/' }, { prompt: "login" })}/>
    </div>
    }
    </>
  )
}
