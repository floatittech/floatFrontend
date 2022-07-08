import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface EditButtonProps{
  bgColor?: string,
  textColor?: string,
  fontSize ? : string,
  hover ? : string
}

export default function EditWorkFlowButton(Props:EditButtonProps) {
    const {bgColor="bg-white", textColor="text-white", fontSize, hover} = Props;

    const router = useRouter()
    const {workflowId} = router.query

  return (
    <Link href={`/workfloat/${workflowId}`}> 
        <div className={`flex items-center ${bgColor}  rounded-lg ring-1 ring-white ${textColor} py-2 px-5 focus:outline-none space-x-1.5 cursor-pointer ${hover}`}>
          <div className={`${fontSize}`}>Edit</div>
          <div><Icon icon="fluent:image-edit-24-regular" width="20" height="20" className='opacity-80' /></div>
        </div>
    </Link>
  )
}
