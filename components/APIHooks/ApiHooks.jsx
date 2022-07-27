import useSWR from "swr";

export const useUser = () => {
    const { data, error } = useSWR('/api/auth/user/')

    return {
        user : data,
        isLoading : !error && !data,
        isError : error
    }
}

// Below Are Workflow SWR APIHooks
export const useWorkFlow = (workflowId) => {

    const { data, error, mutate, isValidating } = useSWR( workflowId ? `/api/userdetail/${workflowId}/` : '/api/userdetail/')

    return {
        workflow : data,
        workflowisLoading : isValidating,
        workflowisError : error,
        workFlowMutate : mutate
    }
}

// Below Are The Share Options Workflow SWR APIHooks
export const useShareWorkflow = (workflowId) => {
    const fetcher = url => fetch(url).then(r => r.json())
    const {data, error, isValidating} = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/api/share/${workflowId}/`,fetcher, {shouldRetryOnError: false})
    return {
        ShareWorkflow : data,
        ShareWorkflowNoData : !data,
        ShareWorkflowisLoading : !data,
        ShareWorkflowisError : error,
        ShareWorkflowisValidating : isValidating,
    }
}