import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {

  const { status } = useSession();
  const router = useRouter();

  if(status === 'authenticated'){
    router.push("/workfloat");
  }

  return <LoadingScreen/>
}

Home.auth = true;