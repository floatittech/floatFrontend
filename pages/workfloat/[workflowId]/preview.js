import React, { useState } from 'react'
import { useRouter } from 'next/router'
import LayoutWorkFlow from '../../../components/Layout/LayoutWorkFlow'
import ThumbnailImageViewer from '../../../components/WorkFlowScreen/ThumbnailImageViewer'
import LoadingScreen from '../../../components/LoadingScreen'
import { useSession } from 'next-auth/react';
import { useWorkFlow } from '../../../components/APIHooks/ApiHooks'
import Error from 'next/error'
import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';

export default function Preview() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const {workflowId} = router.query
    const { workflow, workflowisError, workflowisLoading } = useWorkFlow(workflowId)
    const [activeStep, setActiveStep] = useState(0)
    
    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

    if (workflowisLoading) return <LoadingScreen/>
    if (workflowisError) return <Error title='Error While Fetching Data'/>

  return (
      <div className='w-full mx-auto py-4 px-32'>
      {/* ImageViewer */}
      <ThumbnailImageViewer image={workflow?.screen_shot}/>
      </div>
  )
}

Preview.getLayout = function getLayout(page) {
    return (
      <LayoutWorkFlow>
        {page}
      </LayoutWorkFlow>
    )
  }
