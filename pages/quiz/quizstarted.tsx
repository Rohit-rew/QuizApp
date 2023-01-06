import React from "react";

//components
import DashFooter from "../../components/DashFooter";
import QuestionForm from "../../components/Quiz/questionForm";

//types
import { selectionType } from "../../lib/types/type";

// utils imports
import { getAnsArray } from "../../lib/utils";
import { questionSet } from "../../lib/questions";
import ActiveQuizDetails from "../../components/Quiz/activeQuizDetails";


export default function QuizStarted() {
  const [currentQuestion , setCurrentQuestion] = React.useState(5)

  const submitQuestion = (e:React.FormEvent<HTMLFormElement> , selectedAnswers : selectionType)=>{
    e.preventDefault()

    const ansArray = getAnsArray(selectedAnswers)
    console.log(ansArray)
    // check the answer and proceed accordingly
  }

  return (
    <div className="dashboard background-gradient background-image w-full min-h-screen bg-green-500 flex flex-col gap- items-center relative p-5 gap-5">
      <h1 className="text-3xl font-bold">Java Quiz</h1>

      {/* QUiz details on the quiz Page */}
      <ActiveQuizDetails />
      {/* question form */}
       <QuestionForm  submitQuestion={submitQuestion}/>

    <DashFooter/>
    </div>
  );
}
