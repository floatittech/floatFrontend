import React from 'react'
import Image from 'next/image'

export default function Working() {
  return (
    <div className='flex justify-center items-center bg-white h-screen'>
        <Image
        src={"/working.gif"}
        width={500}
        height={500}
        alt='working'
        />
    </div>
  )
}
