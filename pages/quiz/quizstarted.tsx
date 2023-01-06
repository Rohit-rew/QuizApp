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
    selectedAnswers: selectionType,
    setSelectedAnswers :React.Dispatch<React.SetStateAction<selectionType>>
  ) => {
    e.preventDefault();
    // resets the form
    setSelectedAnswers({
      1: false,
      2: false,
      3: false,
      4: false,
    })

    const selectedAnsArray = getAnsArray(selectedAnswers);
    const isCorrectAns = ansValidator(selectedAnsArray , questionSet[currentQuestion].answer )

    setAttemptedQuestions(preval=>preval+1)
    setRemainingQuestions(preval=>preval-1)

    if(isCorrectAns){
      // increase the current score score by 5 pts
      setcurrentScore(preval=>preval+5)
      // increase the current question
      setCurrentQuestion(preval=>preval+1)
      // increase the dificulty by 1
      setCurrentQuestionDifficulty(preval=>preval+1)
    }else{
      // decrease the current score by 2 pts
      setcurrentScore(preval=>preval-2)
      // increase the current question
      setCurrentQuestion(preval=>preval-1)
      // decrease the difficulty level by 1
      setCurrentQuestionDifficulty(preval=>preval-1)
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
