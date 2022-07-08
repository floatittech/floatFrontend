import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavData } from './NavData'
import { useSession, signOut } from "next-auth/react"
import { Icon } from '@iconify/react';
import { FullLogo } from '../NavBarCommonComponents/Logo'

export default function NavLeft() {
    const router = useRouter()
    const { data: session } = useSession()
    // const {user, isLoading, isError} = useUser()

    // if(isLoading) return null

    return (
        <div className="hidden w-64 bg-white fixed top-0 md:block mx-auto h-full ">
            <div className="flex flex-col justify-between items-center space-y-1">
                
                {/* Full Logo */}
                <div className="py-10">
                    <FullLogo TWClassName='space-x-3'/>
                </div>

                <div className="flex flex-col w-full text-md space-y-5 px-8 ">
                {session && (NavData.map((navdata, i)=> {
                    return (
                        <div key={i}>
                        <Link href={navdata.link}>

                        <a>
                        <div className={`flex justify-start items-center text-center px-3 space-x-5 shadow-violet-200 text-sm font-semibold ${router.pathname == `${navdata.link}` ? ' text-purple-600 font-extrabold' : "opacity-60"} `} >
                            <div>{navdata.icon}</div>
                            <div>{navdata.title}</div>
                        </div>
                        </a>

                        </Link>
                        </div>
                    )
                    }) )
                }

                {/* <button 
                onClick={() => signOut({ callbackUrl: '/' })} 
                className="flex justify-start p-3 w-full rounded-full font-semibold text-orchid bg-pink-100 hover:font-bold hover:shadow-inner hover:shadow-pink-100 hover:animate-pulse"
                >
                <LogoutIcon className="h-6 w-6 ml-5 mr-3"/>
                Logout  
                </button> */}
                </div>

                <div className='w-full text-sm px-8'>
                    
                    <div className='mt-5'>OTHER</div>

                    <button onClick={() => signOut({ callbackUrl: '/' })} className="flex justify-start items-center p-4 space-x-4 font-semibold rounded-full text-rose-500 hover:font-bold hover:animate-pulse" >
                        <div><Icon icon="heroicons-outline:logout" width="24" height="24" /></div>
                        <div>Logout</div>
                    </button>

                </div>

                <div className='flex flex-col justify-around text-center p-2 text-white w-52 h-48 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl fixed bottom-2'>
                    <div>Hi, Akshay</div>
                    <div>“None of us is as smart as all of us”</div>
                    <div className='flex justify-center items-center rounded-xl p-2 bg-white text-purple-600 space-x-1 shadow-inner'>
                        <div><Icon icon="fa6-solid:circle-plus" width="22" height="22" /></div>
                        <div className='text-black font-bold text-sm'>Invite Teammates</div>
                        <div><Icon icon="line-md:chevron-small-right" width="22" height="22" /></div>
                    </div>
                </div>

            </div>
            
            
        </div>
    )
}
