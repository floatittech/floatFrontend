import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
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
        else {
            router.push('/workfloat')
        }

    }, [loading, hasUser, router]);

    if(loading || !hasUser) {
        return <LoadingScreen/>;
    }

    return children;
}

