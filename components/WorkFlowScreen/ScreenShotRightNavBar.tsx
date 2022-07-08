import React from 'react'
import { useWorkFlow } from '../APIHooks/ApiHooks';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useForm } from "react-hook-form";

interface ScreenShotRightNavBarProps{
  screenshotIndex? : number
}

export default function ScreenShotRightNavBar(Props:ScreenShotRightNavBarProps) {
  const {screenshotIndex} = Props;
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // async function sendRequest(url, { arg }) {
  //   return await axios.patch(url, arg)
  // }
  // const router = useRouter()
  // const {workflowId} = router.query

  //const {workflow, workflowisError, workflowisLoading, workFlowMutate} = useWorkFlow(workflowId);

  //const { trigger, data } = useSWRMutation(`/api/userdetail/${workflowId}/`, sendRequest, {revalidate:false})
  // console.log(workflow, "akki workfow");
  //console.log(trigger, "akki trigger");
  //console.log(data, "akki data");
  
  // const addHotSpot = () => {
  //   alert("Hi , You Click On Hotspot")
    //const wf = workflow.screen_shot[screenshotIndex].metadata.coords
    //const cor = {x: 200, y: 100}
    //trigger({...workflow.screen_shot[screenshotIndex].metadata, coords : cor });
    //trigger([{ wf : {x: 200, y: 100}}]);
    //workFlowMutate({...workflow, share:workflow?.share === false ? true : false});
    //trigger(...workflow, {screen_shot.[screenshotIndex].metadata.coords : 0: {x: 200, y: 100}});
    //trigger({workflow.screen_shot[screenshotIndex].metadata : true});
    //trigger({workflow[screenshotIndex] : true});
  // }

  // const addImage = data => {
  //   // alert("Hi , You Click On addImage")
  //   console.log(data, "akki data");
    
  // }

  return (
        <div className="w-16 flex flex-col dark:bg-gray-900 space-y-3 mx-2">
            <div><SideBarIcon icon={<Icon icon="material-symbols:my-location-sharp" width="18" height="18" />} text={"Add Hotspot"} /></div>
            <div><SideBarIcon icon={<Icon icon="icomoon-free:bullhorn" width="16" height="16" hFlip={true} />} text={"Call To Action"} /></div>
            <div><SideBarIcon icon={<Icon icon="fluent:image-add-20-regular" width="20" height="20" />} text={"Add Image"} />
            {/* <input type="file" /> */}
            {/* <form >
              <input onChange={(e) => console.log(e, "akki e")} type="file" {...register("addImage", { required: true })} />
            </form> */}
            </div>
        </div>

  )
}

const SideBarIcon = ({ icon, text = 'Tooltip 💡' }) => (
    <div className="relative flex items-center justify-center h-10 w-10 mx-auto bg-white hover:bg-purple-600 dark:bg-gray-800  text-purple-600 hover:text-white
    hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-inner group">
      {icon}
      <span className="absolute w-auto p-2 m-2 min-w-max right-12 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100 origin-left;">
        {text}
      </span>
    </div>
  );