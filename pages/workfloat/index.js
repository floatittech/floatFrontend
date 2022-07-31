import React from 'react'
// import Layout from '../../components/Layout'
import Layout from '../../components/Layout/Layout'
import WorkFlowCard from '../../components/Cards/WorkFlowCard'
import WelcomeCard from '../../components/Cards/WelcomeCard'
import { useWorkFlow } from '../../components/APIHooks/ApiHooks'
import LoadingScreen from '../../components/LoadingScreen'
import Error500 from '../../components/NoDataORErrorPage/500';
import NoData from '../../components/NoDataORErrorPage/NoData';

export default function Collection() {
  const {workflowisLoading, workflowisError, workflow} = useWorkFlow();

  if (workflowisLoading) return <LoadingScreen/>
  if (workflow == 0) return <NoData/>
  if (workflowisError) return <div className='pt-40'><Error500/></div>
  // <h1 className='rounded-md text-center shadow-inner bg-rose-100 font-bold text-rose-500'>Error While Fetching Data. Please Check Console Log For More Info.</h1>
  return (
      <div className='py-6 px-4'>
        <WelcomeCard />
        <WorkFlowCard/>
        


      </div>
  )
}

Collection.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

Collection.auth = true;