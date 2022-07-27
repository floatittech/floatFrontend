import React from 'react'
import { useUser } from '../APIHooks/ApiHooks'
import LoadingScreen from '../LoadingScreen'

export default function WelcomeCard(props) {
  const { user } = useUser()

  return (
    <div className='flex ml-10 justify-start items-center space-x-20'>
      <div className='text-2xl font-extrabold capitalize'>Welcome, {user?.first_name}</div>
      <div className='flex justify-center items-center space-x-5 text-xs'>
        <button className='bg-purple-100 text-purple-600 p-1.5 px-3 rounded-full shadow-inner font-semibold '>My Workflow</button>
        <button className=''>Other</button>
      </div>
    </div>
  )
}
