import React, { useState, useRef, Fragment } from 'react'
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { Switch, Transition, Dialog } from '@headlessui/react'
//import useSWRMutation  from 'swr/mutation';
import useSWR, { useSWRConfig } from 'swr'
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useWorkFlow } from '../../APIHooks/ApiHooks';
import LoadingScreen from '../../LoadingScreen';

interface ShareButtonProps{
    rounded? : string,
    bgColor? : string,
    textColor? : string,
    textSize?: string,
    iconSize?: number,
    fontSize?: string,
    workFlowId : string, 
    workFlowTitle : string,
    workFlowShare : boolean,
}

export default function ShareOptions(Props:ShareButtonProps) {
    const {rounded="rounded-lg", bgColor="bg-white", textColor="text-black", textSize="text-sm", iconSize=18, fontSize='font-normal', 
    workFlowId, workFlowTitle, workFlowShare } = Props;
    
    const [isOpen, setIsOpen] = useState(false); // Share Model Popup
    const { mutate } = useSWRConfig()
    // const router = useRouter()
    // const {workflowId} = router.query
    const {workflow, workflowisError, workflowisLoading, workFlowMutate} = useWorkFlow(workFlowId);
    console.log(workflow, "akki workflow");
    const [enabled, setEnabled] = useState(workFlowShare); // On/Off Button
    const textAreaRef = useRef(null);
    const shareTextAreaRef = useRef(null);
    const notify = () => toast.success('Copied Successfully');
    
    const onChangeButton = async () => {
        workFlowShare ? setEnabled(false) : setEnabled(true)
        await axios.patch(`/api/userdetail/${workFlowId}/`, { share:workFlowShare ? false : true})
        mutate(`/api/userdetail/${workFlowId}/`, {...workflow, share : workFlowShare ? false : true}, false);
        //workFlowMutate({...workflow, share:workFlowShare ? false : true});
        //trigger(workFlowShare ? {share : false} : {share : true});
    }
    const EmbedcopyToClipBoard = () => {
        navigator.clipboard.writeText(textAreaRef.current.value);
        textAreaRef.current.select();
        notify()
    }
    const LinkcopyToClipBoard = () => {
        navigator.clipboard.writeText(shareTextAreaRef.current.value);
        shareTextAreaRef.current.select();
        notify()
    }
    
    //const { trigger} = useSWRMutation(`/api/userdetail/${workFlowId}/`, sendRequest, {revalidate:true})

  return (
    <>
        <div className="flex items-center justify-center">
            <div
            onClick={() => setIsOpen(true)}
            className={`inline-flex items-center space-x-1 w-full justify-center ${textColor} ${rounded} ${bgColor} px-4 py-2 ${textSize} ${fontSize}
            hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-90 cursor-pointer`}
           >
                <div><Icon icon="fluent:share-ios-20-filled" width={`${iconSize}`} height={`${iconSize}`} /></div>
                <div>Share</div>
            </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-20" onClose={() => setIsOpen(false)}>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-gray-700/80" />
                </Transition.Child>

                <div className="fixed inset-0 flex items-center justify-center">
                    {/* <Dialog.Panel className=" w-full max-w-md transform overflow-hidden rounded-lg bg-white p-4 shadow-xl transition-all"> */}
                    <Dialog.Panel className="relative w-[520px]">
                        {/* Cancel Icon */}
                        <div onClick={() => setIsOpen(false)} className='absolute top-0 right-0 -mr-2 mt-1 p-1 cursor-pointer  text-red-500 rounded-full bg-red-100'>
                            <Icon icon="ic:round-cancel" width="24" height="24" />
                        </div>

                            <div className={`w-full border rounded-lg bg-white text-black shadow-inner overflow-hidden text-sm transition-all text-opacity-75 z-30 mt-4`}>
                                
                                <div className='flex items-center justify-between p-4'>
                                    <div className='flex items-center space-x-2'>
                                        <div><Icon icon="gis:globe-share" width="24" height="24" /></div>
                                        
                                        <div className='items-center '>
                                            <div>Share link</div>
                                            <div className='text-xs font-thin'>Publish & Share Publicly To Any Website </div>
                                        </div> 
                                    </div>
                                    {/* Switch On/Off */}
                                    <Switch
                                    checked={enabled}
                                    onChange={onChangeButton} 
                                    className={`${enabled ? 'bg-green-600' : 'bg-stone-300'} relative shadow-inner inline-flex h-[25px] w-[54px] shrink-0 cursor-pointer
                                        rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 
                                        focus-visible:ring-white focus-visible:ring-opacity-75`}
                                    >
                                    <span className='text-xxs font-semibold '>
                                    {enabled ? <div className='text-white pl-2'>ON</div> : <div className='pl-6'>OFF</div>}
                                    </span>

                                    <span
                                    aria-hidden="true"
                                    className={`${enabled ? 'translate-x-[29px]' : 'translate-x-[1px]'} absolute
                                    pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full shadow-lg bg-white ring-0 transition duration-75 ease-in-out`}
                                    />
                                    </Switch>
                                </div>

                                {enabled ? 
                                <div>
                                    <div className='flex items-center justify-between font-normal px-4 pb-3'>
                                        {/* Share Link Url */}
                                        {/* <div className='bg-stone-100 w-full rounded-sm mr-4 pl-1 p-2 truncate'> */}
                                        <div className=' w-full mr-3'>
                                            {/* <input ref={shareTextAreaRef} onClick={LinkcopyToClipBoard} value={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/share/${workflowId}/`} */}
                                            <input ref={shareTextAreaRef} onClick={LinkcopyToClipBoard} value={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/share/${workFlowId}/`}
                                            className='bg-stone-100 whitespace-normal focus:outline-none resize-none rounded w-full text-xs p-2.5 break-all font-mono
                                            shadow-inner border-0 select-none cursor-pointer' readOnly spellCheck="false"/>
                                        </div>
                                        {/* Share Link Url Copy Button */}
                                        <div onClick={LinkcopyToClipBoard}  className='bg-stone-200 py-2.5 px-5 rounded-md flex items-center space-x-1 cursor-pointer shadow-inner'>
                                            <div><Icon icon="fluent:document-copy-16-regular" width="20" height="20" /></div>
                                            <div>Copy</div>
                                            <Toaster />
                                        </div>
                                    </div>
                                    {/* Horizontal Border Line First */}
                                    <div className="w-full border-t border-gray-200"></div>
                                    {/* Embed On Website */}
                                    <div className='flex items-center justify-between px-4 py-3'>
                                        {/* Embed Icon With Text On Left Side */}
                                        <div className='flex items-center space-x-2'>
                                            <div><Icon icon="fluent:preview-link-24-regular" width="28" height="28" /></div>
                                            <div className='items-center'>
                                                <div>Embed On Website</div>
                                                <div className='text-xs font-thin'>Embed On Website With Below Code</div>
                                            </div> 
                                        </div>
                                        {/* Embed Right Side Button*/}
                                        <div onClick={EmbedcopyToClipBoard} 
                                        className='bg-stone-200 py-2.5 px-5 rounded-md flex items-center shadow-inner space-x-1 cursor-pointer font-normal'>
                                            <div><Icon icon="fluent:document-copy-16-regular" width="20" height="20" /></div>
                                            <button>Copy</button>
                                            <Toaster />
                                        </div>
                                    </div>
                                    {/* Embed Code TextArea */}
                                    <div className='px-4 pb-1 w-full'>
                                        <textarea ref={textAreaRef} onClick={EmbedcopyToClipBoard} value={`<div style="position: relative; padding-bottom: calc(46.458333333333336% + 41px); height: 0;">
                                        <iframe src=${process.env.NEXT_PUBLIC_FRONTEND_URL}/embed/${workFlowId}/ frameborder="0" webkitallowfullscreen 
                                        mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`} 
                                        className='bg-stone-100 whitespace-normal focus:outline-none resize-none rounded-md w-full h-28 text-xs p-2 break-all font-mono shadow-inner' readOnly spellCheck="false"/>
                                    </div>
                                    {/* Horizontal Border Line Secound */}
                                    <div className="py-1">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                    {/* Share On Twitter */}
                                    <div className='flex items-center justify-between p-4'>
                                        {/* Embed Icon With Text On Left Side */}
                                        <div className='flex justify-center items-center space-x-2'>
                                            <div className='inline-flex'><Image src={"/twitter-icon.svg"} width={30} height={30}/></div>
                                            <div className='items-center'>
                                                <div>Share On Twitter</div>
                                                <div className='text-xs font-thin'>Float Is Completely Interactive With Twitter</div>
                                            </div> 
                                        </div>
                                        {/* Embed Right Side */}
                                        <a target="_blank" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(workFlowTitle)}&url=${process.env.NEXT_PUBLIC_FRONTEND_URL}/share/${workFlowId}/&via=float`} rel="noreferrer">
                                        {/* <a target="_blank" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(workflow?.screen_shot[0]?.metadata?.main_title)}&url=${process.env.NEXT_PUBLIC_FRONTEND_URL}/share/${workflowId}/&via=float`} rel="noreferrer"> */}
                                        
                                        <div className='bg-stone-200 py-2.5 px-5 rounded-md flex items-center shadow-inner space-x-1 cursor-pointer font-normal'>
                                            <div className='inline-flex'><Image src={"/twitter-icon.svg"} width={12} height={12}/></div>
                                            <div>Tweet</div>
                                        </div>
                                        </a>
                                    </div>

                                </div> : null
                                }
                                
                            </div>
                       
                        
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

        


