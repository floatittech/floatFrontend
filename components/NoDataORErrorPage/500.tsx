import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Error500() {
    const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="text-9xl font-extrabold text-black tracking-widest">500</div>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
            Error While Fetching Data!
        </div>
        <button className="mt-5">
          <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <div className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></div>
            <button onClick={() => router.reload()} className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                Reload Page
            </button>
          </div>
        </button>
    </div>
  )
}
