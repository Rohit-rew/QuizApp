import React from "react";

//components
import DashFooter from "../../components/DashFooter";
import QuestionForm from "../../components/Quiz/questionForm";
import ActiveQuizDetails from "../../components/Quiz/activeQuizDetails";
import ScoreGraphModal from "../../components/scoreGraphModal";


//types
import { selectionType } from "../../lib/types/type";

// utils imports
import { ansValidator, getAnsArray } from "../../lib/utils";
import { questionSet } from "../../lib/questions";

//context
import { UserContext } from "../../lib/contextAPI/userContext";

export default function QuizStarted() {
  
  const [currentQuestionDifficulty, setCurrentQuestionDifficulty] = React.useState(5);
  const [currentQuestion , setCurrentQuestion] = React.useState(4)
  const [attemptedQuestions, setAttemptedQuestions] = React.useState(0);
  const [remainingQuestions, setRemainingQuestions] = React.useState(questionSet.length);
  const [currentScore, setcurrentScore] = React.useState(0);
  const [scoreArray , setScoreArray] = React.useState<Number[]>([])

  const {setGraphModal , isGraphModalOpen} = React.useContext(UserContext)

  React.useEffect(()=>{
    setScoreArray(preval=>{
      return [...preval , currentScore]
    })
  },[currentScore])

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

    // quiz end logic
    if(currentQuestionDifficulty==10 && isCorrectAns){
      console.log("quiz ended -> answered diff level 10 ques correctly")
      // quiz ended => show graph to the user
      setGraphModal(true)
      //call the API to store the quiz details in admin db
      return
    }else if(currentQuestionDifficulty==1 && !isCorrectAns){
      console.log("quiz ended -> answered diff level 1 ques Wrong")
      //quiz ended => show graph to the user
      setGraphModal(true)
      //call the API to store the quiz details in admin db
      return
    }

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
      {isGraphModalOpen && <ScoreGraphModal scoreArray={scoreArray} showCrossBtn={false} showGoToDashBtn={true}/> }
    </div>
  );
}
