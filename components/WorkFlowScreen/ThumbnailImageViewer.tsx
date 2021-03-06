import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import { Rings } from  'react-loader-spinner'

interface ImageViewerProps{
    image : Record<string, any>[]
    srcWidth? : number,
    srcHeight? : number,
  }

export default function ThumbnailImageViewer(Props:ImageViewerProps) {
    const { image, srcHeight, srcWidth} = Props;

    const [activeStep, setActiveStep] = useState(0)
    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

    const targetRef = useRef();
    // const clientX = image[activeStep].metadata.coords[0].x/image[activeStep].screenshot_width * 100
    // const clientY = image[activeStep].metadata.coords[0].y/image[activeStep].screenshot_height * 100

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
                // layout='fill'
                layout='responsive'
                src={image[activeStep]?.screenshot}
                width={image[activeStep]?.screenshot_width}
                height={image[activeStep]?.screenshot_height}
                //className="object-cover"
                priority
                alt='Thumbnail Image'
                className='object-cover'
                />

                {/* HotSpot Ring Animation */}
                {/* <div onClick={goToNextPicture} style={{ top: `${clientY}%`, left:`${clientX}%`}} className='absolute h-5 w-5 bg-green-500 rounded-full z-20'/> */}
                <div onClick={goToNextPicture} style={{ top: `${image[activeStep].metadata.coords[0].y}%`, left:`${image[activeStep].metadata.coords[0].x}%`}}  className={`${activeStep === image.length - 1 ? 'hidden' : "absolute top-0 left-0 flex justify-center items-center  cursor-pointer z-20 w-0 h-0 transition-all transform-gpu duration-700 ease-in-out delay-100 "}`}>
                    <Rings ariaLabel="loading-indicator" color='#643DFE' />
                </div>

                {/* Replay Demo Button */}
                <div className={`${activeStep === image.length - 1 ? 'absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60' : 'hidden' }`}>
                    <div onClick={() => setActiveStep(0)} className='flex cursor-pointer items-center justify-center space-x-1 z-20 font-semibold px-4 py-2 text-sm text-indigo-500 bg-indigo-100
                    transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100'>
                        <Icon icon="material-symbols:replay-circle-filled" width="24" height="24" />
                        <div>Replay Demo</div>
                    </div>
                </div>
            </div>

        </div>
  )
}