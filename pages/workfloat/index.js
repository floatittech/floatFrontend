import React from 'react'
// import Layout from '../../components/Layout'
import Layout from '../../components/Layout/Layout'
import WorkFlowCard from '../../components/Cards/WorkFlowCard'
import WelcomeCard from '../../components/Cards/WelcomeCard'
import Link from 'next/link'
import LoadingScreen from '../../components/LoadingScreen'

export default function collection() {
  // const {screenshot, isError, isLoading} = useScreenshot();

  // if (isLoading) return <LoadingScreen/>
  // if (isError) return <h1 className='rounded-md text-center shadow-inner bg-rose-100 font-bold text-rose-500'>Error While Fetching Data. Please Check Console Log For More Info.</h1>

  return (
      <div>
        <WelcomeCard />
        <WorkFlowCard/>
      </div>
  )
}

collection.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }