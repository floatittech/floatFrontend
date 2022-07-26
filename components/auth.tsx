import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import axios from 'axios'
import LoadingScreen from './LoadingScreen';

export function Auth({ children }) {
    const { data: session, status } = useSession();
    const loading = status === "loading";
    const hasUser = !!session?.user;
    const router = useRouter();

    useEffect(() => {
        if(!loading && !hasUser) {
            router.push("/login")
        }
    }, [loading, hasUser]);

    if(session) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${session?.accessToken}`;
        axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL
    }

    if(loading || !hasUser) {
        return <LoadingScreen/>;
    }

    return children;
}

