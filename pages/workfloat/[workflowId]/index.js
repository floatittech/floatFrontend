import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LayoutWorkFlow from '../../../components/Layout/LayoutWorkFlow'
import WorkFlowLeftSlider from '../../../components/WorkFlowScreen/WorkFlowLeftSlider'
import LoadingScreen from '../../../components/LoadingScreen'
import { useWorkFlow } from '../../../components/APIHooks/ApiHooks'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ScreenShotRightNavBar from '../../../components/WorkFlowScreen/ScreenShotRightNavBar'
import WorkFlowPreviewImage from '../../../components/WorkFlowScreen/WorkFlowPreviewImage'
import useSWR, { useSWRConfig } from 'swr'

export default function workflowid() {
  
  const [screenshotIndex, setScreenshotIndex] = useState(0)
  const router = useRouter()
  const {workflowId} = router.query
  
  const {workflow, workflowisError, workflowisLoading} = useWorkFlow(workflowId);
  //console.log(screenshotIndex, "akki screenshotIndex")
  //console.log(workflow, "akki workflowsss")
  const [imageSlider, setImageSlider] = useState(workflow?.screen_shot)
  const { mutate } = useSWRConfig()
  //console.log(imageSlider, "akki imageSlider")
  useEffect(() => {
    setImageSlider(workflow?.screen_shot)
  }, [workflow] );

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(imageSlider);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0 , reorderedItem);

    setImageSlider(items);
    //mutate(`/api/userdetail/${workflowId}/`)
  }

  if (workflowisLoading) return <LoadingScreen/>
  if (workflowisError) return <h1>Error</h1>
  //console.log(workflow?.screen_shot, " akki workflow?.screen_shot")

  return (
        <div className='w-full flex text-center'> 
          {/* Left Slide Bar */}
          <div className='fixed flex flex-col w-[300px] bg-white p-3 overflow-y-auto h-screen pb-24'>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId='imageslider'>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {imageSlider?.map((items, index) => (
                      <Draggable key={items?.id} draggableId={`item-${items?.id}`} index={index}>
                        {(provided) => (
                         
                          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} key={index} onClick={() => setScreenshotIndex(index)}>
                            <WorkFlowLeftSlider
                            index = {index}
                            screenshot = {items.screenshot}
                            blurImage = {items.blurhash}
                            screenshotIndex = {screenshotIndex}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>

          <div className='w-full flex pt-8 ml-80'>
            {/* Right Screenshot Preview */}
            <div className='flex flex-col w-11/12 px-3'>
              <WorkFlowPreviewImage image={workflow?.screen_shot} screenshotIndex={screenshotIndex}/>
            </div>

            {/* Right Nav Bar Small */}
            <div>
              <ScreenShotRightNavBar screenshotIndex={screenshotIndex}/>
            </div>
          </div>

        </div>
  )
}

workflowid.getLayout = function getLayout(page) {
    return (
      <LayoutWorkFlow>
        {page}
      </LayoutWorkFlow>
    )
  }


      // <div className='flex w-auto justify-center items-center mt-5'>
      // {/* Screenshot Below */}
      // <div className='flex flex-col w-3/5'>

      //     {/* Header Title In URL */}
      //     <div className='relative flex justify-center items-center p-2 bg-slate-100 rounded-t-xl shadow-inner'>

      //         <div className='flex absolute left-4 space-x-1'>
      //             <div className='rounded-full bg-rose-400 cursor-pointer border-2 h-5 w-5'></div>
      //             <div className='rounded-full bg-yellow-500 cursor-pointer border-2 h-5 w-5'></div>
      //             <div className='rounded-full bg-green-500 cursor-pointer border-2 h-5 w-5'></div>
      //         </div>

      //         <div className='flex justify-center items-center rounded-lg p-1 px-4 bg-zinc-200 w-1/2 text-sm space-x-2 opacity-80'>
      //             <div><Icon icon="uis:lock" width="14" height="14" className="opacity-60" /></div>
      //             <div className='text-sm truncate'>{ShareWorkflow?.screen_shot[activeStep]?.metadata?.main_title}</div>
      //         </div>

      //     </div>

      //     {/* Screenshot Image */}
      //     <div className="relative aspect-w-2 aspect-h-1 rounded-b-xl shadow-inner border overflow-hidden" >

      //         <Image
      //         src={ShareWorkflow?.screen_shot[activeStep]?.screenshot}
      //         layout="fill"
      //         className="object-contain"
      //         // placeholder="blur" 
      //         // blurDataURL={useNextBlurhash(ShareWorkflow?.screen_shot[activeStep]?.blurhash)}
      //         quality={100}
      //         priority={true}
      //         />

      //         {/* HotSpot Ring Animation */}
      //         <div onClick={goToNextPicture} className={`${activeStep === ShareWorkflow?.screen_shot?.length - 1 ? 'hidden' : 'absolute cursor-pointer z-20 w-20 h-20 transition-all' }`}>
      //             <Rings ariaLabel="loading-indicator" color='#643DFE' />
      //         </div>

      //         {/* Replay Demo Button */}
      //         <div className={`${activeStep === ShareWorkflow?.screen_shot?.length - 1 ? 'absolute flex items-center justify-center bg-gray-900 bg-opacity-60' : 'hidden' }`}>
      //             {/* <div onClick={() => setActiveStep(0)} className='flex cursor-pointer items-center justify-center space-x-1 z-50 font-semibold shadow-inner text-primary_Blue bg-primary_Blue_medium p-2 rounded-lg hover:ring-4 transition-all'> */}
      //             <div onClick={() => setActiveStep(0)} className='flex cursor-pointer items-center justify-center space-x-1 z-50 font-semibold px-4 py-2 text-sm text-indigo-500 bg-indigo-100
      //             transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100'>
      //               <Icon icon="material-symbols:replay-circle-filled" width="24" height="24" />
      //               <div>Replay Demo</div>
      //             </div>
      //         </div>

      //         {/* Float WaterMark */}
      //         <div className={`${activeStep === ShareWorkflow?.screen_shot?.length - 1 ? 'absolute ' : 'hidden' }`}>
      //           <Tippy arrow={true} interactiveBorder={40} placement='left' content={<div className='text-xxs rounded-sm text-white px-1.5 p-0.5 backdrop-invert-0 bg-white/20'>Made With Float</div>} >
      //             <div className='absolute flex items-center justify-center cursor-pointer shadow-inner right-4 bottom-2 z-50 font-semibold transition-all animate-pulse'>
      //               <a href='https://www.addfloat.com/'>
      //                 <Image
      //                 src='/logo.svg'
      //                 width={30}
      //                 height={30}
      //                 />
      //               </a>
      //             </div>
      //           </Tippy> 
      //         </div>

      //     </div>

      // </div>

      // </div>