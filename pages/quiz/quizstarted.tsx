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
  const [currentQuestion, setCurrentQuestion] = React.useState(5);
  const [attemptedQuestions, setAttemptedQuestions] = React.useState(0);
  const [remainingQuestions, setRemainingQuestions] = React.useState(
    questionSet.length
  );
  const [currentScore, setcurrentScore] = React.useState(0);


  const ansValidator = (selectedAnsArray:Number[] , actualAnsArray:Number[]):Boolean=>{
    // if there are multiple answers and the user has selected only 1 the answer is wrong 
    // if there is 1 ans and user has selected multiple then also the ans is wrong
    if(selectedAnsArray.length != actualAnsArray.length) return false
    // compare every selected answer with the actual answers if and of them mismatch return false
    for(let i in selectedAnsArray){
      if(selectedAnsArray[i] != actualAnsArray[i]){
        return false
      }
    }
    // if answers match
    return true
  }

  const submitQuestion = (
    e: React.FormEvent<HTMLFormElement>,
    selectedAnswers: selectionType
  ) => {
    e.preventDefault();
    const selectedAnsArray = getAnsArray(selectedAnswers);
    const isCorrectAns = ansValidator(selectedAnsArray , questionSet[currentQuestion].answer )

    if(isCorrectAns){
      // increase the current score score by 5 pts
      // increase the dificulty by 1
    }else{
      // decrease the current score by 2 pts
      // decrease the difficulty level by 1
    }


  };

  return (
    <div className="dashboard background-gradient background-image w-full min-h-screen bg-green-500 flex flex-col gap- items-center relative p-5 gap-5">
      <h1 className="text-3xl font-bold">Java Quiz</h1>

      {/* QUiz details on the quiz Page */}
      <ActiveQuizDetails
        attemptedQuestions={attemptedQuestions.toString()}
        remainingQuestions={remainingQuestions.toString()}
        totalQuestions={questionSet.length.toString()}
        currentScore={currentScore.toString()}
        currentDifficultyLevel={currentQuestion}
      />
      {/* question form */}
      <QuestionForm submitQuestion={submitQuestion} />

      <DashFooter />
    </div>
  );
}
