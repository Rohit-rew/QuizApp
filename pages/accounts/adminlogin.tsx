import Link from "next/link";
import React from "react";
import LoginForm from "../../components/login/loginForm";

export default function AdminLogin() {

  const [emailError , setEmailError] = React.useState<null | String>(null)
  const [passError , setPassError] = React.useState<null | String>(null)


  const loginAdmin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // remove any preset error
    setEmailError(null)
    setPassError(null)

    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value

    if(email && password){
      console.log("submitted")
      console.log(email , password)
      // make API call here
    }else if(!email && !password){        // frontend validation
      setEmailError("Please enter email")
      setPassError("Please enter Password")
    }else if(!password){
      setPassError("Please enter Password")
    }else if(!email){
      setEmailError("Please enter email")
    }

  };


  return (
    <div className="background-gradient h-screen bg-green-500 p-5 flex flex-col justify-start items-center gap-32 sm:justify-center">
      <h1 className="text-center text-5xl font-semibold leading-20">
        Admin Login
      </h1>

    <div className="w-full flex flex-col items-center gap-5 ">
      <LoginForm login={loginAdmin} emailErrorMsg={emailError} passErrorMsg={passError}/>
      <Link href={"/accounts/adminregister"}>
        <p className="underline">Not an Admin ? SignUp Here</p>
      </Link>


    </div>
    </div>
  );
}

