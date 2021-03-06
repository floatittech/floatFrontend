import React from 'react'
import Link from 'next/link'
import ShareOptions from '../NavBarCommonComponents/ShareOptions';
import PreviewWorkFlowButton from '../NavBarCommonComponents/PreviewWorkFlowButton';
import ProfileMenuPopDown from '../NavBarCommonComponents/ProfileMenuPopDown';
import { useRouter } from 'next/router';
import { useWorkFlow } from '../../APIHooks/ApiHooks';
import EditWorkFlowButton from '../NavBarCommonComponents/EditWorkFlowButton';
import { Icon } from '@iconify/react';
import LoadingScreen from '../../LoadingScreen';

export default function TopNavBar() {
    const router = useRouter()
    const {workflowId} = router.query
    const { workflow, workflowisError, workflowisLoading } = useWorkFlow(workflowId);
    
    if (workflowisLoading) return <LoadingScreen/>
    if (workflowisError) return null

  return (
          <div className='h-[68px] flex justify-between items-center pl-20 pr-4  border-b-1 bg-gradient-to-r from-[#e1f4ff] to-[#f9e1ff] text-white'>
              
              {/* Back Arrow */}
              
              {/* <Link href={router.pathname.endsWith('preview') ? `/workfloat/${workflowId}` : "/workfloat"}><div className='absolute left-2 p-2 mx-4 px-4 rounded-md cursor-pointer'><BiLeftArrowAlt size={28}/></div></Link> */}
              <Link href={router.pathname.endsWith('preview') ? `/workfloat/${workflowId}` : "/workfloat"} passHref><div className='absolute left-2 p-2 mx-4 px-4 rounded-md cursor-pointer text-[#1f1f75]'><Icon icon="fluent:arrow-left-12-filled" width="22" height="22" /></div></Link>

              {/* My WorkFloat Text*/}
              <div className='font-semibold text-[#1f1f75]'>My WorkFloat</div>

              {/* Preview */}
              <div className='flex justify-between items-center space-x-4 text-sm '>

                {/* Preview/Edit Button */}
                {router.pathname.endsWith('preview') ? <EditWorkFlowButton textColor='text-zinc-700 font-semibold' hover='hover:scale-105'/> : <PreviewWorkFlowButton/>}
                
                {/* Share Options Component */}
                <ShareOptions workFlowId={workflowId}  workFlowTitle={workflow?.screen_shot[0]?.metadata?.main_title}  workFlowShare={workflow?.share} bgColor='bg-[#216fed] hover:bg-[#1f1f75]' textColor='text-white' />

                {/* Profile Image With Name Below [Note :: Props "Value" Must Be In TailwindCSS (Ex. textColor='text-black')] */}
                <ProfileMenuPopDown  />
                  
              </div>

          </div>
  )
}
