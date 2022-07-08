import React, { useState } from 'react'
import Image from 'next/image'
import useNextBlurhash from "use-next-blurhash";
import useBlurData from 'use-next-blurhash';

interface WorkFlowLeftSliderProps{
  screenshotIndex : number,
  screenshot : string,
  index : number,
  blurImage : string,
}

export default function WorkFlowLeftSlider(Props : WorkFlowLeftSliderProps) {
  const { screenshotIndex, screenshot, index, blurImage } = Props;

  //const [blurDataUrl]  = useBlurData("LEHV6nWB2yk8pyo0adR*.7kCMdnj")

  // {console.log(useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj"), "akki blur new")}
  // {console.log(blurDataUrl, "akki blur 2")}

  return (
      <div  className={`flex items-center justify-center p-3 space-x-3 mb-3 rounded-2xl cursor-pointer ${screenshotIndex === index ? "bg-purple-500" : "hover:ring-2 hover:ring-purple-400" }`} key={index}>

        {/* Slider Image Index Like 1, 2, 3 Etc. */}
        <div className={`flex items-center  justify-center text-xs rounded-full   shadow-md w-6 h-6 p-2 ${screenshotIndex === index ? "bg-yellow-500 ring-4 ring-white text-black font-semibold" : "bg-purple-500  text-white" }`}>{index+1}</div>
        
        {/* Screenshot */}
        <div className='flex items-center  rounded-xl overflow-hidden shadow-md w-full h-32 relative'>

        <Image
          src={screenshot}
          layout='fill'
          className="object-cover"
          placeholder="blur" 
          blurDataURL={"/logo.png"}
          alt="slider Image"
        />
        {/* {console.log("logo.png", "akki blur")} */}
        
        </div>
      </div>

  )
}
