import React from "react";

//components
import DashFooter from "../../components/DashFooter";
import QuestionForm from "../../components/Quiz/questionForm";
import ActiveQuizDetails from "../../components/Quiz/activeQuizDetails";

//types
import { selectionType } from "../../lib/types/type";

// utils imports
import { ansValidator, getAnsArray } from "../../lib/utils";
import { questionSet } from "../../lib/questions";

export default function QuizStarted() {
  
  const [currentQuestionDifficulty, setCurrentQuestionDifficulty] = React.useState(5);
  const [currentQuestion , setCurrentQuestion] = React.useState(4)
  const [attemptedQuestions, setAttemptedQuestions] = React.useState(0);
  const [remainingQuestions, setRemainingQuestions] = React.useState(
    questionSet.length
  );
  const [currentScore, setcurrentScore] = React.useState(0);


 

  const submitQuestion = (
    e: React.FormEvent<HTMLFormElement>,
    selectedAnswers: selectionType
  ) => {
    e.preventDefault();
    const selectedAnsArray = getAnsArray(selectedAnswers);
    const isCorrectAns = ansValidator(selectedAnsArray , questionSet[currentQuestion].answer )

    if(isCorrectAns){
      // increase the current score score by 5 pts
      // setcurrentScore(preval=>preval+5)
      console.log("answer is correct")
      // increase the dificulty by 1

    }else{
      // decrease the current score by 2 pts
      console.log("answer is wrong")
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
        currentDifficultyLevel={currentQuestionDifficulty}
      />
      {/* question form */}
      <QuestionForm submitQuestion={submitQuestion} currentQuestion={questionSet[currentQuestion]} />

      <DashFooter />
    </div>
  );
}
