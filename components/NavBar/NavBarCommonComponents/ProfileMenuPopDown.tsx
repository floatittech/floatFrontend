import React, {Fragment} from 'react';
import { Menu, Transition } from '@headlessui/react'
import { signOut } from 'next-auth/react';
import { useUser } from '../../APIHooks/ApiHooks'
import Image from 'next/image'
import { useSession } from "next-auth/react";


interface ProfileProps{
  bgColor?: string,
  textColor?: string,
}

export default function ProfileMenuPopDown(Props: ProfileProps) {
  const { bgColor="bg-gray-200", textColor="text-black" } = Props;  // TypeScript Props With TailwindCSS
  // const {user , } = useUser();
  // console.log(user, "akki us")
  const {data:session} = useSession();
  return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
            <Menu.Button className="flex text-sm pl-2">
                {/* Profile Image With text */}
                {/* <div className={`flex justify-center items-center space-x-2 pr-1.5 pl-3 py-1 ${bgColor} font-semibold rounded-full shadow-sm`}>
                  <div className={`${textColor} text-xs w-16 truncate capitalize`}>Hi, {session?.user?.name}</div> */}
                  <div className='flex justify-center'>
                      <Image 
                      src={session?.user?.image} 
                      width={36} 
                      height={36} 
                      alt="user name"
                      className='object-cover rounded-full' />
                  </div>
                {/* </div> */}
            </Menu.Button>
            </div>

            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className="absolute right-0 w-36 md:w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
                
                <div className="px-1 py-1">
                <Menu.Item>
                    {({ active }) => (
                    <button
                        onClick={() => signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/login` })} 
                        className={`${
                        active
                            ? "bg-violet-500 text-white font-semibold"
                            : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                        {active ? (
                        <LogoutActiveIcon
                            className="w-5 h-5 mr-2 text-violet-400"
                            aria-hidden="true"
                        />
                        ) : (
                        <LogoutInactiveIcon
                            className="w-5 h-5 mr-2 text-violet-400"
                            aria-hidden="true"
                        />
                        )}
                        Logout
                    </button>
                    )}
                </Menu.Item>
                </div>
            </Menu.Items>
            </Transition>
        </Menu>
  )
}

function LogoutInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          stroke="#8B5CF6"
          strokeWidth="2"
        />
      </svg>
    );
  }
  
  function LogoutActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>
    );
  }
