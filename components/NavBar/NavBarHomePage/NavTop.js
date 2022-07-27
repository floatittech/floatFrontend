import React from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useUser } from "../../APIHooks/ApiHooks";
import ProfileMenuPopDown from "../NavBarCommonComponents/ProfileMenuPopDown";
import { Icon } from '@iconify/react';
import {SmallLogo} from '../NavBarCommonComponents/Logo'

export default function NavTop() {

  return (
          <div className=" max-w-7xl mx-auto px-1.5 sm:px-4 lg:px-6 bg-transparent">
            <div className="relative flex items-center justify-between h-16">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <div className="flex items-center justify-center">
                  <span className="sr-only">full-logo</span>
                <Image
                src="/logo.svg"
                alt="Trelo logo"
                width={45}
                height={40}
                />
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <SmallLogo/>
                <div className="hidden md:flex items-center ml-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-600 via-purple-600 to-rose-300">
                      Dashboard
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:ml-6 sm:pr-0">
                {/* View notifications */}
                {/* <button type="button" className=" text-gray-500 mr-2">
                  <BiBell className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute flex items-center justify-center w-5 h-5 text-xs inset-y-2 inset-x-3 font-bold leading-none text-red-100 bg-orchid rounded-full">5</span>
                </button> */}
                
                {/* Add Chrome Extension */}
                <a href="#">
                <div className="flex justify-between items-center p-2.5 px-4 space-x-1.5 shadow-inner rounded-full text-white bg-gradient-to-r from-purple-600 to-purple-700 mr-6">
                  <div><Icon icon="bi:plus-circle-fill" width="24" height="24" /></div>
                  <div>Add Chrome Extension</div>
                </div>
                </a>
                
                {/* Profile dropdown */}
                <ProfileMenuPopDown />
              </div>
              
            </div>
          </div>
  );
}

