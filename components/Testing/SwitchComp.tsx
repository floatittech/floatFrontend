import React, {useEffect, useState, useCallback} from 'react'
import { Switch } from '@headlessui/react';
import { useWorkFlow } from '../APIHooks/ApiHooks';

export default function SwitchComp() {

  const {workflow, workflowisError, workflowisLoading, workFlowMutate} = useWorkFlow("fa7cf299-ff0b-471d-9e1a-b3633a311804");
  // console.log(isEnabled ,"ienabled 2")
  const [isEnabled, setIsEnabled] = useState(false);
  
  const onChangeSwitch = () => { 
      // console.log(isEnabled ,"ienabled")
      // setIsEnabled(!isEnabled);
      // console.log(isEnabled ,"ienabled 2")
  }
  // console.log(isEnabled, "lower akk");
  
  useEffect(() => {
    isEnabled == true ?  setIsEnabled(true) : setIsEnabled(false)
    // setIsEnabled(!isEnabled)
    // if(isEnabled){
    //   setIsEnabled(false)
    // }
    // if(!isEnabled){
    //   setIsEnabled(true)
    // }
    console.log("in useEffect", isEnabled);
    // onChangeSwitch()
        // return () => {
        //   setIsEnabled(!isEnabled)
        //     console.log("return cleaned");
        //   };
  },[onChangeSwitch])

return (
  <div className='flex justify-center items-center space-x-4'>
     <Switch
    checked={isEnabled}
    onChange={onChangeSwitch}
    className={`${
      isEnabled ? 'bg-blue-600' : 'bg-gray-200'
    } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
      <span
      className={`${
        isEnabled ? 'translate-x-6' : 'translate-x-1'
      } inline-block h-4 w-4 transform rounded-full bg-white`}
      />
      </Switch>
  </div>
)
}
