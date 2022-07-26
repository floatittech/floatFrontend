import React, {useRef} from 'react'
import Lottie from 'lottie-react'
import checklistAnimation from '../../LottieFiles/checklist.json'

export default function Creating() {
    const lotref = useRef();
  return (
    <div className='flex justify-center bg-white '>
        <div className='flex items-center w-[600px] h-screen'>
        <Lottie animationData={checklistAnimation} loop={true} lottieRef={lotref.current} />
        {/* <Lottie se/> */}
        </div>
    </div>
  )
}

Creating.auth = true;
