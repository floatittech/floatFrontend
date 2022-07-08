import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import { Rings } from  'react-loader-spinner'
import useNextBlurhash from "use-next-blurhash";
import { useWorkFlow } from '../APIHooks/ApiHooks';
import { useRouter } from 'next/router'
import HotspotPopperModal from '../HotspotPopper/HotspotPopperModal';
import { usePopper } from 'react-popper';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

interface WorkFlowPreviewImageProps{
  image? : Record<string, any>[]
  screenshotIndex? : number,

}

export default function WorkFlowPreviewImage(Props:WorkFlowPreviewImageProps) {
  const { image, screenshotIndex} = Props;

    const [visible, setVisible] = useState(false);

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });

    const router = useRouter()
    const {workflowId} = router.query
    const {workflow, workflowisError, workflowisLoading} = useWorkFlow(workflowId);
    const [clientCoord, setClientCoord] = useState();
    // console.log(workflow.screen_shot[0].metadata.coords.x, "akki work")
    // const x = (props.coordsX * 100) / clientCoord?.naturalWidth
    // const x = (props.coordsX * 100) / clientCoord?.naturalWidth
    // const y = (props.coordsY * 100) / clientCoord?.naturalHeight
    // console.log(window.innerWidth, "akki window.innerWidth");
    // console.log(window.innerHeight, "akki window.innerHeight");
    // const [width, setWidth] = useState(0);
    // const handleResize = () => setWidth(window.innerWidth);
    // useEffect(() => {
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    //   }, [width]);
      
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });
    
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    // const handleResize = () => {
    //     setWidth(window.innerWidth);
    //     setHeight(window.innerHeight);
    //     if (targetRef.current) {
    //         setDimensions({
    //           width: targetRef.current.offsetWidth,
    //           height: targetRef.current.offsetHeight
    //         });
    //       }
    // }

    // useLayoutEffect(() => {
    //         window.addEventListener('resize', handleResize);
    //         return () => window.removeEventListener('resize', handleResize);
    //   }, [width, height]);

    
      const [activeStep, setActiveStep] = useState(0)
      //console.log(image, "akk src")
      const goToNextPicture = () => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };
  
      const clientX = image[screenshotIndex].metadata.coords[0].x/image[screenshotIndex].screenshot_width * 100
      const clientY = image[screenshotIndex].metadata.coords[0].y/image[screenshotIndex].screenshot_height * 100
      console.log(clientX, " clientX");
      console.log( clientY, " clientY");
      // console.log(image[activeStep].screenshot_width, " screenshot_width");
      // console.log( image[activeStep].screenshot_height, " screenshot_height");
      // console.log( image[activeStep].metadata.coords[0].x, " image original coord X");
      // console.log( image[activeStep].metadata.coords[0].y, " image original coord Y");
      // console.log( image, " image ");

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
        
        />

        {/* HotSpot Ring Animation */}
        <div style={{ top: `${clientY}%`, left:`${clientX}%`}}  className={`${activeStep === image.length - 1 ? 'hidden' : "flex justify-center items-center absolute cursor-pointer z-20 w-0 h-0 transition-all transform-gpu duration-700 ease-in-out delay-100 "}`}>
            <Rings ariaLabel="loading-indicator" color='#643DFE' />
        </div>

    </div>
</div>
  )
}
