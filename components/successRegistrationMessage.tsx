import React from 'react'
import Router from 'next/router'

//types
type propTypes = {
    registeredAs : String
    route : any
}

export default function SuccessRegistrationMessage({registeredAs , route}:propTypes) {
  return (
    <div className="quizcreateModal absolute w-full h-full  bg-black bg-opacity-80 box-border p-5 flex justify-center items-center">
        <div className="w-full bg-white rounded relative max-w-xl p-5 flex flex-col gap-6 justify-center items-center">
            <h2 className='text-2xl'>Registered as {registeredAs} </h2>

            <p className='text-center'>You have successfully registered as {registeredAs} please click on the below button to login</p>

            <button onClick={()=>Router.push(route)} className='bg-green-500 w-full py-2 rounded text-xl text-white shadow'>Login as {registeredAs}</button>
          
        </div>
      </div>
  )
}
