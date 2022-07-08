import React from 'react'

interface FullLogoProps{
    TWClassName? : string
}

export function FullLogo(Props:FullLogoProps) {
    const {TWClassName} = Props;
  return (
    <div className={`${TWClassName} flex justify-center items-center space-x-1`}>
        <div className='flex justify-center items-center p-3 rounded-full w-10 h-10 bg-gradient-to-l from-purple-500 to-purple-700 shadow-lg'>
            <img src='/logo-f.svg' alt='logo'/>
        </div>
        <div className='text-[25px] bg-clip-text text-transparent bg-gradient-to-l from-purple-500 to-purple-700 font-bold'>Float</div>
    </div>
  )
}


export function SmallLogo() {
    return (
          <div className='flex justify-center items-center p-3 rounded-full w-10 h-10 bg-gradient-to-l from-purple-500 to-purple-700 shadow-lg'>
              <img src='/logo-f.svg' alt='logo'/>
          </div>
    )
  }