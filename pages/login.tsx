import React from 'react'
import GoogleButton from 'react-google-button'
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router";

export default function Login() {

  const { status } = useSession();
  const router = useRouter();

  if(status === 'authenticated'){
    router.push("/workfloat");
  }

  return (
    <div className="flex justify-center h-screen items-center">
    <GoogleButton onClick={() => signIn("google", { callbackUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/workfloat` }, { prompt: "login" })}/>
    </div>
  )
}