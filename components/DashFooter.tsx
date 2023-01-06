import React from 'react'
// font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright , faRegistered } from "@fortawesome/free-solid-svg-icons";


export default function DashFooter() {
  return (
    <div className="w-full bg-gray-900 h-20 flex justify-center items-center text-white gap-1 absolute bottom-0">
       Quizify <FontAwesomeIcon icon={faRegistered}/> All rights reserved
      </div>
  )
}
