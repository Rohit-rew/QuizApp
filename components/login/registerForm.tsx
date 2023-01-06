import React from 'react'

type registerFunc = (e:React.FormEvent<HTMLFormElement> )=>void
type errorMsg = String | null

type propType = {
  register : registerFunc,
  nameErrorMsg : errorMsg
  emailErrorMsg : errorMsg,
  passErrorMsg : errorMsg,
  confirmPassErrorMsg : errorMsg
}

export default function RegisterForm({register ,nameErrorMsg , emailErrorMsg , passErrorMsg , confirmPassErrorMsg} : propType) {

  return (
   <form
          onSubmit={(e) => register(e)}
          className="w-full max-w-md bg-white rounded-xl shadow p-5 flex flex-col justify-between gap-1"
        >
          <div className="flex flex-col gap-2 h-28">
            <label className="text-2xl">Name</label>
            <input
              id="namee"
              className="border border-gray-400 rounded h-10 px-2"
              type={"text"}
            />
            {nameErrorMsg && <p className="text-red-500 text-sm">{nameErrorMsg}</p>}
          </div>
          <div className="flex flex-col gap-2 h-28">
            <label className="text-2xl">Email</label>
            <input
              id="email"
              className="border border-gray-400 rounded h-10 px-2"
              type={"email"}
            />
            {emailErrorMsg && <p className="text-red-500 text-sm">{emailErrorMsg}</p>}
          </div>

          <div className="flex flex-col gap-2 h-28">
            <label className="text-2xl">Password</label>
            <input
              id="password"
              className="border border-gray-400 rounded h-10 px-2"
              type={"password"}
            />
            {passErrorMsg && <p className="text-red-500 text-sm">{passErrorMsg}</p>}
          </div>

          <div className="flex flex-col gap-2 h-28">
            <label className="text-2xl">Confirm Password</label>
            <input
              id="confirmPassword"
              className="border border-gray-400 rounded h-10 px-2"
              type={"password"}
            />
            {confirmPassErrorMsg && <p className="text-red-500 text-sm">{confirmPassErrorMsg}</p>}
          </div>

          <button type="submit" className="bg-black text-white py-4 rounded-xl">
            Sign Up
          </button>
        </form>
  )
}
