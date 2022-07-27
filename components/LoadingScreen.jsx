import React from 'react'
import Image from "next/image";
import { SmallLogo } from './NavBar/NavBarCommonComponents/Logo';

export default function LoadingScreen() {
    return (
            <div className='absolute inset-0 flex justify-center items-center animate-pulse'>
                <SmallLogo />
            </div>
    )
}
