import Link from "next/link";
import React, { Context, ContextType } from "react";

//components
import LoginForm from "../../components/login/loginForm";

//axios
import axios, { AxiosError } from "axios";
import Router from "next/router";

//cookies
import { useCookies } from "react-cookie";

// types
type propTypes = {
  query : {quizId : string} | null | undefined
}

export default function UserLogin({query} : propTypes) {
  const [emailError, setEmailError] = React.useState<null | String>(null);
  const [passError, setPassError] = React.useState<null | String>(null);
  const [cookie , setCookie] = useCookies()

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // remove any preset error
    setEmailError(null);
    setPassError(null);

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    if (email && password) {
      console.log("submitted");
      console.log(email, password);
      // make API call here
      try { 
          const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/login` , {email,password})
          const token = response.data.token //jwt otken
        if(token){ //set the token on the browser storage as cookies
          setCookie("quizify" , token ,{
            path: "/",
            sameSite: true,
            maxAge: 60*60*24,
          })
          if(query?.quizId){
            Router.push(`/quiz/${query.quizId}`)
          }else{
            Router.push("/user/dashboard")
          }
        }
      } catch (error) {
        console.log(error)
        if(error instanceof AxiosError){
          if(error.response?.status == 401){
            setPassError(error.response.data.message)
          }else if(error.response?.status == 404){
            setEmailError(error.response.data.message)
          }else{
            setEmailError("something Went wrong")
          }
        }else{
          setEmailError("something Went wrong")
        }
      }
    } else if (!email && !password) {
      // frontend validation
      setEmailError("Please enter email");
      setPassError("Please enter Password");
    } else if (!password) {
      setPassError("Please enter Password");
    } else if (!email) {
      setEmailError("Please enter email");
    }
  };

  return (
    <div className="background-gradient h-screen bg-green-500 p-5 flex flex-col justify-start items-center gap-32 sm:justify-center">
      <h1 className="text-center text-5xl font-semibold leading-20">
        User Login
      </h1>

      <div className="w-full flex flex-col items-center gap-5 ">
        <LoginForm
          login={loginUser}
          emailErrorMsg={emailError}
          passErrorMsg={passError}
        />
        <Link href={"/accounts/userregister"}>
          <p className="underline">Not a User ? Signup Here</p>
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps(context ) {
  const query = context.query

  if(!query){
    return {
      props : {}
    }
  }
  return {
    props : {query}
  }
}
