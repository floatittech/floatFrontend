import React from 'react'
import Image from 'next/image'
import useNextBlurhash from "use-next-blurhash";
import Link from 'next/link'
import { useWorkFlow, useUser } from '../APIHooks/ApiHooks';
import { useSession } from 'next-auth/react';
import ShareOptions from '../NavBar/NavBarCommonComponents/ShareOptions';
import LoadingScreen from '../LoadingScreen';
import { Icon } from '@iconify/react';

export default function WorkFlowCard() {
  const { data: session, status } = useSession()
  const {workflow, workflowisError, workflowisLoading, workFlowMutate} = useWorkFlow();
  const {user} = useUser();

   if (workflowisLoading) return <LoadingScreen/>
   if (workflowisError) return <h1>Error</h1>

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center'>
      {workflow && workflow.map((items, index) => (
        <div  key={index}>
          <div className='mt-4 w-72 bg-white rounded-xl overflow-hidden p-2.5 shadow-inner'>
            <Link href={`/workfloat/${items?.id}`}>
              <a>
                {/* Image Area */}
                <div className='flex relative'>
                <Image 
                className='rounded-xl' 
                src={items?.screen_shot[0]?.screenshot}
                width={324} 
                height={165} 
                quality={90} 
                //placeholder="blur"
                //blurDataURL={items?.screen_shot[0]?.blurhash ? useNextBlurhash(items?.screen_shot[0]?.blurhash) : items?.screen_shot[0]?.screenshot}
                />

                {/* Preview & Edit On Hover */}
                {/* <div className=''> */}
                  {/* <div className='flex justify-center w-full h-full rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  hover:bg-black hover:bg-opacity-30 items-center text-white space-x-2 text-xs'>
                    <div className='rounded-full p-2 px-4 bg-primary_Blue'>Preview</div>
                    <div className='rounded-full p-2 px-5 bg-primary_Blue'>Edit</div>
                  </div> */}
                {/* </div> */}

                {/* Total Steps In WorkFlow */}
                <div className='flex items-center absolute bottom-1 left-1 p-1 px-1.5 rounded-full 
                bg-gradient-to-r from-slate-500 to-slate-600 text-white space-x-1 text-xs shadow-lg'>
                  <div><Icon icon="lucide:clock-3" width="14" height="14" inline={true} /></div>
                  <div>{items.screen_shot?.length} Steps</div>
                </div>
                
                </div>

                {/* User Name Below Image */}
                <div className='flex justify-between items-center my-3.5 font-semibold '>
                  <div className='truncate'>{items.screen_shot[0]?.metadata?.main_title}</div>
                  <div><Icon icon="entypo:dots-three-vertical" width="14" height="14" /></div>
                  {/* <div><BiDotsVerticalRounded /></div> */}
                </div>
              </a>
            </Link>

            {/* User Profile Image With Name & Share Button */}
            <div className='flex justify-between items-center text-xs'>
              <div className='flex justify-center items-center space-x-3'>
                <div>
                <Image 
                src={session?.user?.image}
                height={40}
                width={40}
                className="h-8 w-8 rounded-full shadow-md" 
                placeholder="blur"
                blurDataURL={session?.user?.image}
                />
                </div>
                <div>
                  <div className='font-semibold text-sm capitalize'>{user?.first_name}</div>
                  <div className='font-semibold text-xxs opacity-70'>{items.time_since_update}</div>
                </div>
              </div>
              
              <div>
                <ShareOptions workFlowId={items?.id} workFlowTitle={items.screen_shot[0]?.metadata?.main_title}  workFlowShare={items?.share}
                rounded='rounded-full' bgColor='bg-gradient-to-r from-purple-50 to-purple-100'
                 textColor='text-purple-600' iconSize={14} textSize="text-xs" fontSize='font-bold'  />
              </div>
            </div>  
          </div>

        </div>
      ))}
    </div>
  )
}
