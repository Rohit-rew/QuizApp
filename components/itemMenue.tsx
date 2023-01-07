import React from "react";
import Router from "next/router";
//cookie
import { useCookies } from "react-cookie";

export default function ItemMenue() {

  const [cookies , setCookies] = useCookies()

  const logout = ()=>{
    // detete the existing cookies and send to home route
    setCookies("quizify" , "" ,{
      path: "/",
      sameSite: true,
      maxAge: 1,
    })
    Router.push("/")
  }

  return (
    <div
      id="itemMenue"
      className="w-1/3 bg-white absolute right-5 top-20 z-10 rounded"
    >
      <button
        onClick={() => logout()}
        className="border w-full h-full rounded py-2 hover:bg-gray-300"
      >
        Logout
      </button>
      {/* can add more buttons here */}
    </div>
  );
}
