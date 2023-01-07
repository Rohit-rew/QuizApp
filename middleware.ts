import { NextRequest, NextResponse } from "next/server";
import next from "next";
import * as jose from 'jose'



const secret = process.env.SECRET

export async function middleware(req : NextRequest){
    
    console.log("middleware runs")
    
    if (req.nextUrl.pathname.startsWith('/')) {
        const tokenFromCookies = req.cookies.get("quizify")?.value
        if(tokenFromCookies){
            const data = await jose.jwtVerify(tokenFromCookies , new TextEncoder().encode(secret))
            console.log(data)
        }
    }
}