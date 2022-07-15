import React from 'react'
import Image from "next/image";
import { SmallLogo } from './NavBar/NavBarCommonComponents/Logo';

export default function LoadingScreen() {
    return (
        <div className="flex h-screen justify-center items-center animate-pulse">
        {/* <Image src="/logo.svg" width={90} height={75} alt="LoadingLogo"/> */}
        <SmallLogo />
        </div>
    )
}
