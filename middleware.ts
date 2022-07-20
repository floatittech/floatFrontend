import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "next-auth/react";


export async function middleware(req : NextRequest) {
        const cookie = req.headers.get('cookie')
        const session = cookie ? await getSession({ req: { headers: { cookie } } as any }) : null
        if (!session) return NextResponse.redirect(new URL("/", req.url));
    return NextResponse.next();
}

export const config = {
    matcher: ['/workfloat/', '/workfloat/:workflowId*', '/api/auth/signin/google/', '/profile/'],
  }
