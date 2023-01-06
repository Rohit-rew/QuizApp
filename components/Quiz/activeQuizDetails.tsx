import React from 'react'

// types
type propTypes = {
    totalQuestions : String,
    attemptedQuestions : String,
    remainingQuestions : String,
    currentScore : String,
    currentDifficultyLevel : number,
}

export default function ActiveQuizDetails({totalQuestions , attemptedQuestions , remainingQuestions, currentScore , currentDifficultyLevel} :propTypes) {
  return (
    <div className="flex flex-col bg-white p-3 rounded w-full max-w-xl gap-5 shadow">
        <table className="border text-left rounded w-full">
          <tbody>
            <tr className="border ">
              <th className="border p-1">Total Questions</th>
              <th className="border font-light p-1">{totalQuestions}</th>
            </tr>
            <tr className="border ">
              <th className="border p-1 text-green-500">Attempted</th>
              <th className="border font-light p-1">{attemptedQuestions}</th>
            </tr>

            <tr className="border">
              <th className="border p-1">Remaining</th>
              <th className="border font-light p-1">{remainingQuestions}</th>
            </tr>

            <tr className="border">
              <th className="border p-1 text-red-500">Score</th>
              <th className="border font-light p-1 w-2/4">{currentScore}</th>
            </tr>
          </tbody>
        </table>

        <div className="w-full bg-red-100 rounded h-8 border relative">
          <div style={{ width: `${currentDifficultyLevel/10*100}%` }} className={`${currentDifficultyLevel>5 ? "bg-green-500" : "bg-red-500" } h-full`}>
            {" "}
          </div>
          <h2 className="absolute top-0 font-bold w-full h-full text-center flex justify-center items-center">
            Current Ques Difficulty : {currentDifficultyLevel}
          </h2>
        </div>
      </div>
  )
}
