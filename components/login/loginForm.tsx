import React from 'react'

type loginFunc = (e:React.FormEvent<HTMLFormElement>)=>void
type errorMsg = String | null;

type propType = {
    login : loginFunc,
    emailErrorMsg : errorMsg
    passErrorMsg : errorMsg

}

export default function LoginForm({login , emailErrorMsg , passErrorMsg} : propType) {


  return (
    <form
        onSubmit={(e) => login(e)}
        className="w-full max-w-md bg-white rounded-xl shadow p-5 flex flex-col justify-between gap-3"
      >
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

        <button type="submit" className="bg-black text-white py-4 rounded-xl">
          Login
        </button>
      </form>
  )
}
