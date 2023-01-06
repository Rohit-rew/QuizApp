import Link from "next/link";
import React from "react";
import RegisterForm from "../../components/login/registerForm";

export default function AdminRegister() {
  const [nameErrorMsg, setNameErrorMsg] = React.useState<String | null>(null);
  const [emailErrorMsg, setEmailErrorMsg] = React.useState<String | null>(null);
  const [passErrorMsg, setpassErrorMsg] = React.useState<String | null>(null);
  const [confirmPassErrorMsg, setconfirmPassErrorMsg] =
    React.useState<String | null>(null);

  const registerAdmin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // remove any preset error
    setEmailErrorMsg(null);
    setpassErrorMsg(null);
    setconfirmPassErrorMsg(null);

    const name = e.currentTarget.namee.value;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const confirmPassword = e.currentTarget.confirmPassword.value;

    if (email && password && confirmPassword) {
      if (password != confirmPassword) {
        setpassErrorMsg("passwords do not match");
        setconfirmPassErrorMsg("passwords do not match");
      }
      console.log("submited");
      console.log(email, password, confirmPassword);
      // make api call here
      // send to another route
    } else if (!name) {
      setNameErrorMsg("Please enter name");
    } else if (!email) {
      setEmailErrorMsg("Please enter email");
    } else if (!password) {
      setpassErrorMsg("Please enter password");
    } else if (!confirmPassword) {
      setconfirmPassErrorMsg("Please confiorm password");
    }
  };

  return (
    <div className="background-gradient h-screen bg-green-500 p-5 flex flex-col justify-center items-center gap-10 sm:justify-around">
      <h1 className="text-center text-5xl font-semibold leading-20">
        Admin SignUp
      </h1>

      <div className="w-full flex flex-col items-center gap-5 ">
        <RegisterForm
        nameErrorMsg={nameErrorMsg}
          register={registerAdmin}
          emailErrorMsg={emailErrorMsg}
          passErrorMsg={passErrorMsg}
          confirmPassErrorMsg={confirmPassErrorMsg}
        />

        <Link href={"/accounts/adminlogin"}>
          <p className="underline">Already a user ? Login here</p>
        </Link>
      </div>
    </div>
  );
}
