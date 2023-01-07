import Link from "next/link";
import React from "react";

//components
import RegisterForm from "../../components/login/registerForm";
import SuccessRegistrationMessage from "../../components/successRegistrationMessage";

//axios
import axios, { AxiosError } from "axios";

export default function UserRegister() {
    const[nameErrorMsg , setNameErrorMsg] = React.useState<String|null>(null)
    const[emailErrorMsg , setEmailErrorMsg] = React.useState<String|null>(null)
    const[passErrorMsg , setpassErrorMsg] = React.useState<String|null>(null)
    const[confirmPassErrorMsg , setconfirmPassErrorMsg] = React.useState<String|null>(null)
    const [isregistered , setIsregistered] = React.useState<Boolean>(false)

    const registerUser = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        
        // remove any preset error
        setEmailErrorMsg(null)
        setpassErrorMsg(null)
        setconfirmPassErrorMsg(null)
        
        const email = e.currentTarget.email.value
        const password = e.currentTarget.password.value
        const confirmPassword = e.currentTarget.confirmPassword.value
        const name = e.currentTarget.namee.value
        
        if(name && email && password && confirmPassword){
            if(password != confirmPassword){
                setpassErrorMsg("passwords do not match")
                setconfirmPassErrorMsg("passwords do not match")
                return
            }
            // make api call here
            try {
              const response = await axios.post("http://localhost:4000/user/register" , {name,email,password})
              console.log(response)
              setIsregistered(true)
            } catch (error) {
              console.log(error)
              if(error instanceof AxiosError){
                if(error.response?.status == 400){
                  setEmailErrorMsg(error.response.data.message)
                }else{
                  setEmailErrorMsg("Something went wrong")
                }
              }else{
                setEmailErrorMsg("Something went wrong")
              }
            }

        }else if(!name && !email && !password && confirmPassword){
            setEmailErrorMsg("please enter email")
            setpassErrorMsg("please enter password")
            setconfirmPassErrorMsg("please confirm your password")
        }else if(!name){
          setNameErrorMsg("Please enter name")
        }
        else if(!email){
            setEmailErrorMsg("Please enter email")
        }else if(!password){
            setpassErrorMsg("Please enter password")
        }else if(!confirmPassword){
            setconfirmPassErrorMsg("Please confirm your password")
        }

    }


  return (
    <div className="background-gradient h-screen bg-green-500 p-5 flex flex-col justify-center items-center gap-10 sm:justify-around">
      <h1 className="text-center text-5xl font-semibold leading-20">
        User SignUp
      </h1>

      <div className="w-full flex flex-col items-center gap-5 ">
        
        <RegisterForm register={registerUser} nameErrorMsg={nameErrorMsg} emailErrorMsg={emailErrorMsg} passErrorMsg={passErrorMsg} confirmPassErrorMsg={confirmPassErrorMsg}/>

        <Link href={"/accounts/userlogin"}>
          <p className="underline">Already a user ? Login here</p>
        </Link>
      </div>
      {isregistered && <SuccessRegistrationMessage registeredAs={"User"} route={"/accounts/userlogin"}/>}
    </div>
  );
}
