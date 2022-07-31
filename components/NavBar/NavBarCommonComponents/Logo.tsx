import React from 'react'
import Image from 'next/image'
interface FullLogoProps{
    TWClassName? : string
}

export function FullLogo(Props:FullLogoProps) {
    const {TWClassName} = Props;
  return (
    <div className={`${TWClassName} flex justify-center items-center space-x-1`}>
      <Image src='/logo.svg' width={110} height={40} alt='logo'/>
        {/* <div className='flex justify-center items-center p-3 rounded-full w-10 h-10 bg-gradient-to-l from-purple-500 to-purple-700 shadow-lg'>
            <Image src='/logo-f.svg' width={16} height={16} alt='logo'/>
        </div>
        <div className='text-[25px] bg-clip-text text-transparent bg-gradient-to-l from-purple-500 to-purple-700 font-bold'>Float</div> */}
    </div>
  )
}


export function SmallLogo() {
    return (
      <div className='flex justify-center items-center'>
        <Image
        src={'/logo.svg'}
        width={110}
        height={90}
        alt="small-logo"
        />
      </div>
          // <div className='flex justify-center items-center p-3 rounded-full w-10 h-10 bg-gradient-to-l from-purple-500 to-purple-700 shadow-lg'>
          //     <Image src='/logo-f.svg' width={16} height={16} alt='logo'/>
          // </div>
    )
  }