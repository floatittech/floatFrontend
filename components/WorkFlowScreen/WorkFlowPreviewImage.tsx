import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import { Rings } from  'react-loader-spinner'
import useNextBlurhash from "use-next-blurhash";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

interface WorkFlowPreviewImageProps{
  image? : Record<string, any>[]
  screenshotIndex? : number,

}

export default function WorkFlowPreviewImage(Props:WorkFlowPreviewImageProps) {
    const { image, screenshotIndex} = Props;  
      const [activeStep, setActiveStep] = useState(0)
      //console.log(image, "akk src")
      const goToNextPicture = () => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };
  
  return (
    <div className='flex flex-col'>

    {/* Header Title In URL */}
    <div className='relative flex justify-center items-center p-2 bg-slate-100 rounded-t-xl shadow-inner'>
        <div className='flex absolute left-4 space-x-2'>
            <div className='rounded-full bg-[#EE6A5F] cursor-pointer border border-[#CE5347] h-3 w-3'></div>
            <div className='rounded-full bg-[#F5BD4F] cursor-pointer border border-[#D6A243] h-3 w-3'></div>
            <div className='rounded-full bg-[#61C454] cursor-pointer border border-[#58A942] h-3 w-3'></div>
        </div>

        <div className='flex justify-center items-center rounded-lg p-1 px-4 bg-zinc-200 w-1/2 text-sm space-x-2 opacity-80'>
            <div><Icon icon="uis:lock" width="14" height="14" className="opacity-60" /></div>
            <div className='text-sm truncate'>{image[0]?.metadata?.main_title}</div>
        </div>
    </div>

    {/* Screenshot Image */}
    <div className='relative border rounded-b-xl' >
        <Image
        layout='responsive'
        src={image[screenshotIndex]?.screenshot}
        width={image[screenshotIndex]?.screenshot_width}
        height={image[screenshotIndex]?.screenshot_height}
        alt="Preview Image"
        className='object-cover'
        priority
        />

        {/* HotSpot Ring Animation */}
        <div style={{ top: `${image[screenshotIndex].metadata.coords[0].y}%`, left:`${image[screenshotIndex].metadata.coords[0].x}%`}}  className={`${activeStep === image.length - 1 ? 'hidden' : "flex justify-center items-center absolute cursor-pointer z-20 w-0 h-0 transition-all transform-gpu duration-700 ease-in-out delay-100 "}`}>
            <Rings ariaLabel="loading-indicator" color='#643DFE' />
        </div>

    </div>
</div>
  )
}
