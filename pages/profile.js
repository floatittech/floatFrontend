import React from 'react'
import Layout from '../components/Layout/Layout'
import WorkFlowCard from '../components/Cards/WorkFlowCard'
import WelcomeCard from '../components/Cards/WelcomeCard'
import axios from 'axios'
import axiosAPIClient from '../constants/axiosAPIClient'

export default function dashboard() {
  // const { isLoading, error, data } = useQuery("screenshot", () => axios(`/api/userdetail/`))
  
  // if (isLoading) return <h1>Is Loading......</h1>
  // if (error) return <h1>Is error</h1>
  
  return (
    <div className='mx-2.5 md:mx-3 m-auto bg-white rounded-md min-h-screen' >
      {/* <WelcomeCard/> */}
      {/* {data.data?.map((item, index) => (
        <div key={index}><WorkFlowCard 
        workflow_id={item.workflow_id}
        // id={item.id}
        // screenshot={item.screenshot}
        />
        </div>
      ))} */}
      
    </div>
  )
}

dashboard.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
