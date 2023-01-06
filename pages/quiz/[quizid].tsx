import React from "react";
import Image from "next/image";
import QuizInfoTable from "../../components/Quiz/quizInfoTable";

export default function Quiz() {

    // if the user is logged in show the quiz details otherwise send him to login route ==>


  return (
    <div className="dashboard background-gradient background-image w-full min-h-screen bg-green-500 flex flex-col gap- items-center relative p-5 sm:justify-around">
      <h1 className="text-center text-5xl font-semibold leading-20">
        Welcome to
      </h1>
      <Image alt="" src={"/mainimage.png"} width={200} height={200} />

      <div className="flex flex-col w-full gap-16 max-w-xl ">
        <div className="quizInfo w-full flex bg-white rounded p-4 flex flex-col gap-5">
          <p className="text-3xl text-center w-full">Quiz Info</p>
        
            {/* Need to send the quiz data to teh quiz table */}
          <QuizInfoTable />
        </div>

        <button className="border border-white rounded-2xl shadow py-4 text-xl bg-white font-semibold hover:border-red-500 w-full">
          Start Quiz
        </button>
      </div>
    </div>
  );
}



