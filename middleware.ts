import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";


export async function middleware(req : NextRequest) {
    const session = await getToken({ req, secret: process.env.JWT_SECRET })
    // console.log(session, "akki session");
    if (!session) return  NextResponse.redirect(new URL("/", req.url));
    return NextResponse.next();
}

export const config = {
    matcher: ['/workfloat/', '/workfloat/:workflowId*', '/api/auth/signin/google/', '/profile/'],
  }
