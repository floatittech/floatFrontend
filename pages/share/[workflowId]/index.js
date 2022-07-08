import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react';
import LoadingScreen from '../../../components/LoadingScreen';
import { useSession } from 'next-auth/react';
import { useShareWorkflow } from '../../../components/APIHooks/ApiHooks'
import { signIn } from 'next-auth/react'
import ProfileMenuPopDown from '../../../components/NavBar/NavBarCommonComponents/ProfileMenuPopDown';
import EditWorkFlowButton from '../../../components/NavBar/NavBarCommonComponents/EditWorkFlowButton';
import ThumbnailImageViewer from '../../../components/WorkFlowScreen/ThumbnailImageViewer';
import {FullLogo} from '../../../components/NavBar/NavBarCommonComponents/Logo';
import Error from 'next/error';

export default function Share() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const {workflowId} = router.query
    const { ShareWorkflow, ShareWorkflowisError, ShareWorkflowisLoading } = useShareWorkflow(workflowId)

    if (ShareWorkflowisLoading) return <LoadingScreen/>
    if (ShareWorkflowisError) return <Error title='Error While Fetching Data'/>

  return (
      <div className='w-full'>
      
        <div className='relative bg-opacity-90 text-white z-50'>
          {/* Header Nav Bar */}
          <div className='flex justify-between items-center p-4 px-10'>
              {/* Float Logo */}
              <FullLogo/>

              {/* If User Is Login */}
              {session ? 
              <div className='flex space-x-3'> 
                  <EditWorkFlowButton bgColor='bg-purple-500' hover='hover:scale-105' fontSize='text  -sm' />
                  <ProfileMenuPopDown  />
              </div> 
              : 
              <button onClick={() => signIn("google", { prompt: "login" })} className='flex items-center space-x-1 bg-gradient-to-l from-purple-500 to-purple-700 shadow-md px-3 py-2 rounded-lg'>
                <div>Login</div>
                <Icon icon="majesticons:login-half-circle" width="20" height="20" />
              </button> 
              }

          </div>

        </div>
        
        {/* ImageViewer */}
        <div className=' mx-auto pb-4 px-32'>
          <ThumbnailImageViewer image={ShareWorkflow?.screen_shot}/>
        </div>

      </div>
  )
}