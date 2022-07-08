import React from 'react'
import Error from 'next/error'
import { useRouter } from 'next/router'
import LoadingScreen from '../../../components/LoadingScreen';
import { useShareWorkflow } from '../../../components/APIHooks/ApiHooks';
import ThumbnailImageViewer from '../../../components/WorkFlowScreen/ThumbnailImageViewer';

export default function Embed() {
    const router = useRouter()
    const {workflowId} = router.query
    const { ShareWorkflow, ShareWorkflowisError, ShareWorkflowisLoading, ShareWorkflowNoData } = useShareWorkflow(workflowId)
    if (ShareWorkflowisLoading) return <LoadingScreen/>
    if (ShareWorkflowNoData) return <LoadingScreen/>
    if (ShareWorkflowisError) return <Error title='404 - Embed Link Not Found'/>

  return (
          <div className='w-full'>
              {/* WorkFlow Thumbnail */}
              <ThumbnailImageViewer image={ShareWorkflow?.screen_shot}/>
          </div>   
  )
}