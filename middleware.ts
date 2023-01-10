import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

// env variable
const secret = process.env.SECRET;

export async function middleware(req: NextRequest, res: NextResponse) {
  

  // protecting admin dashboard
  if (req.nextUrl.pathname == "/admin/dashboard") {
    const tokenFromCookies = req.cookies.get("quizify")?.value;
    if (tokenFromCookies) { // if token in avaliable validate it
      const data = await jose.jwtVerify(tokenFromCookies, new TextEncoder().encode(secret));
      if(data){ // if token in valid check if it is an admin toke 
        if (data.payload.admin) { // if it is an admin token let go to /admin/dashboard
          return NextResponse.next();
        } else { // if it is not an admin token send back to home route
          return NextResponse.redirect(new URL("/", req.url));
        }
      }else{ // if tokenininvalid send to home page
          return NextResponse.redirect(new URL("/", req.url));
      }
    } else {  // if token in not  avaliable send to home route
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // if admin is logged in and tries to go to login page or register page send him back to dashboard because admin cannot login twice => he needs to logout first
  if(req.nextUrl.pathname == "/accounts/adminlogin" || req.nextUrl.pathname == "/accounts/adminregister"){
    const tokenFromCookies = req.cookies.get("quizify")?.value;
    if (tokenFromCookies) { // if token in avaliable validate it
      const data = await jose.jwtVerify(tokenFromCookies, new TextEncoder().encode(secret));
      if(data){ // if token in valid check if it is an admin token 
        if (data.payload.admin) { // if it is an admin token push to admin/dashboard
          return NextResponse.redirect(new URL("/admin/dashboard", req.url));
        } else { // if it is not an admin token let go to adminlogin or register
          return NextResponse.next();
        }
      }else{ // if tokenininvalid send to home page
          return NextResponse.redirect(new URL("/", req.url));
      }
    } else {  // if token in not  avaliable send to home route
      return NextResponse.next();
    }
  }

  //protecting user dashboard
  if (req.nextUrl.pathname == "/user/dashboard") {
    const tokenFromCookies = req.cookies.get("quizify")?.value;
    if (tokenFromCookies) { // if token in avaliable validate it
      const data = await jose.jwtVerify(tokenFromCookies, new TextEncoder().encode(secret));
      if(data){ // if token in valid check if it is an admin toke 
        if (data.payload.admin) { // if it is an admin token send to home route
          return NextResponse.redirect(new URL("/", req.url));
        } else { // if it is not an admin token means it is a user token -- let go to user/dashboard
          return NextResponse.next();
        }
      }else{ // if tokenininvalid send to home page
          return NextResponse.redirect(new URL("/", req.url));
      }
    } else {  // if token in not avaliable send to home route
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // if user is logged in and tries to go to login page or register page send him back to dashboard because user cannot login twice => he needs to logout first
  if(req.nextUrl.pathname == "/accounts/userlogin" || req.nextUrl.pathname == "/accounts/userregister"){
    const tokenFromCookies = req.cookies.get("quizify")?.value;
    if (tokenFromCookies) { // if token in avaliable validate it
      const data = await jose.jwtVerify(tokenFromCookies, new TextEncoder().encode(secret));
      if(data){ // if token in valid check if it is an admin token 
        if (data.payload.admin) { // if it is an admin token let go to /accounts/userlogin or register
          return NextResponse.next();
        } else { // if it is not an admin token send to user dashboard because it is a user token
          return NextResponse.redirect(new URL("/user/dashboard", req.url));
        }
      }else{ // if tokenininvalid send to home page
          return NextResponse.redirect(new URL("/", req.url));
      }
    } else {  // if token in not  avaliable let go to /accounts/userlgoin or /accounts/userregister
      return NextResponse.next();
    }
  }

  if(req.nextUrl.pathname.startsWith("/quiz")){
    const data = req.url.split("/") // gets the quiz id from the url if the user
    const quizId = encodeURIComponent(data[data.length-1])
    const tokenFromCookies = req.cookies.get("quizify")?.value;
    if (tokenFromCookies) { // if token in avaliable validate it
      const data = await jose.jwtVerify(tokenFromCookies, new TextEncoder().encode(secret));
      if(data){ // if token in valid check if it is an admin token 
        if (data.payload.admin) { // if it is an admin token push to /accounts/userlogin with the quiz id attached as query params
          return NextResponse.redirect(new URL(`/accounts/userlogin/?quizId=${quizId}`, req.url));  
        } else { // if it is not an admin token means it is a user token -> let go to quiz
          return NextResponse.next();
        }
      }else{ // if tokenininvalid send to home page
          return NextResponse.redirect(new URL("/", req.url));
      }
    } else {  // if token in not avaliable push to /accounts/userlgoin with the quiz id attached in the query params
      return NextResponse.redirect(new URL(`/accounts/userlogin/?quizId=${quizId}`, req.url));
    }

  }


} 
