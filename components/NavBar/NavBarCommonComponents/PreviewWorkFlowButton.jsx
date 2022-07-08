import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'
import { Icon } from '@iconify/react';

export default function PreviewWorkFlowButton() {
  const router = useRouter()

  return (
    <Link href={`${router.asPath}preview`} passHref>

        <div className='flex items-center rounded-lg shadow-inner bg-white text-black hover:bg-gradient-to-r from-pink-400 to-pink-600 py-2 px-4 space-x-1.5 cursor-pointer 
        hover:text-white hover:ring-1 hover:ring-white'>
            <div>Preview</div>
            <div><Icon icon="fluent:preview-link-24-regular" width="18" height="18" /></div>
        </div>

    </Link>
  )
}
