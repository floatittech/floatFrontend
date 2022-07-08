import React from 'react'
import { Rings } from  'react-loader-spinner'
import Image from 'next/image'

export default function ScreenshotPreview(props) {

    // const [naturalWidth, setNaturalWidth] = useState();
    // const [naturalHeight, setNaturalHeight] = useState();
    // const imageWidthHeight = (e) => {
    //   console.log(e, "akki e");
    //   setNaturalWidth(e.naturalWidth)
    //   setNaturalHeight(e.naturalHeight)
    // }
    //console.log(clientx, "akki upper clinet")
    // const [width, setWidth] = useState(0);
    // const [height, setHeight] = useState(0);
    // const handleResize = () => {
    //     setWidth(window.innerWidth);
    //     setHeight(window.innerHeight);
    // }
    // useEffect(() => {
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    //   }, [width, height]);

  return (
    <div className=" relative border-2">

                <div className="w-full h-screen">
                  <Image
                  src={'https://cdnaws.vacancyjobalert.com/media/2022/June/77d246c2-4e4a-46f3-970f-d0ffde8a0212-3dfb47c082b84ded9df6cc8baaebcde6.png'}
                  layout="fill"
                  alt='preview'
                  //className='object-contain'
                  />
                </div>

                {/* <div style={{ left: `${props.workflow?.screen_shot[props.screenshotIndex]?.metadata.coords[0].x * 100 / naturalWidth}%`  , top: `${props.workflow?.screen_shot[props.screenshotIndex]?.metadata.coords[0].y * 100 / naturalHeight}%` }} className='absolute cursor-pointer z-20 w-20 h-20 transition-all'> */}
                <div style={{ left: "250px"  , top: "150px" }} className='absolute cursor-pointer z-20 w-20 h-20 transition-all'>
                <Rings ariaLabel="loading-indicator" color='#643DFE' />
                </div>

    </div>
  )
}
