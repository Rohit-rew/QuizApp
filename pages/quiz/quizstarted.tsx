import React from "react";
import { questionSet } from "../../lib/questions";

export default function QuizStarted() {

  const SubmitQuestion = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(e.currentTarget.one)

  }

  return (
    <div className="dashboard background-gradient background-image w-full min-h-screen bg-green-500 flex flex-col gap- items-center relative p-5 gap-5">
      <h1 className="text-3xl font-bold">Java Quiz</h1>

      <div className="flex flex-col bg-white p-3 rounded w-full max-w-xl gap-5 shadow">
        <table className="border text-left rounded w-full">
          <tbody>
            <tr className="border ">
              <th className="border p-1">Total Questions</th>
              <th className="border font-light p-1">{questionSet.length}</th>
            </tr>
            <tr className="border ">
              <th className="border p-1 text-green-500">Attempted</th>
              <th className="border font-light p-1">0</th>
            </tr>

            <tr className="border">
              <th className="border p-1">Remaining</th>
              <th className="border font-light p-1">10</th>
            </tr>

            <tr className="border">
              <th className="border p-1 text-red-500">Difficulty Range</th>
              <th className="border font-light p-1 w-2/4">1-10</th>
            </tr>
          </tbody>
        </table>

        <div className="w-full bg-red-100 rounded h-8 border relative">
          <div style={{ width: "50%" }} className=" bg-red-500 h-full">
            {" "}
          </div>
          <h2 className="absolute top-0 font-bold w-full h-full text-center flex justify-center items-center">
            Current Ques Difficulty : 5
          </h2>
        </div>
      </div>

      {/* question area starts */}
      <form onSubmit={(e)=>SubmitQuestion(e)} className="questionArea w-full bg-white p-3 rounded flex flex-col justify-between max-w-xl gap-5 shadow">
        <h3 className="question">Which of the following is a number ?</h3>

        <div className="options flex  flex-col gap-2">
          <div>
            <input type="checkbox" id="one" name="1" value="1" />
            <label htmlFor="one"> I have a bike</label>
          </div>
          <hr></hr>
          <div>
            <input type="checkbox" id="2" name="2" value="Bike" />
            <label htmlFor="2"> I have a bike</label>
          </div>
          <hr></hr>
          <div>
            <input type="checkbox" id="3" name="3" value="Bike" />
            <label htmlFor="3"> I have a bike</label>
          </div>
          <hr></hr>
          <div>
            <input type="checkbox" id="4" name="4" value="Bike" />
            <label htmlFor="4"> I have a bike</label>
          </div>
        </div>

        <button type="submit" className="bg-green-500 py-2 rounded text-xl text-white">
          Next Question
        </button>
      </form>
      {/* question area ends */}


    </div>
  );
}
