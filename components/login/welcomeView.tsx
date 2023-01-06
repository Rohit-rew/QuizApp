import React from 'react'
import Image from 'next/image'
import Router from 'next/router'

export default function WelcomeView() {


  return (
    <div className='background-gradient h-screen bg-green-500 p-10 flex flex-col justify-start items-center gap-32 sm:justify-center'>

        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-5xl font-semibold leading-20'>Welcome to</h1>
            <Image className='place-center' src={"/mainimage.png"} alt="logoimage" width={200} height={200}/>
        </div>

        <div className=' flex flex-col gap-10 max-w-md w-full'>
            <button onClick={()=>Router.push("/accounts/adminlogin")} className='border border-black rounded-2xl shadow py-4 text-white text-xl bg-black font-semibold hover:border-red-500'>Login as Admin</button>
            <button onClick={()=>Router.push("/accounts/userlogin")} className='border border-white rounded-2xl shadow py-4 text-xl bg-white font-semibold hover:border-red-500'>Login as User</button>
        </div>

    </div>
  )
}
