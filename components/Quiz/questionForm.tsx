import React from "react";

//types
import { questionType } from "../../lib/questions";
import { selectionType } from "../../lib/types/type";
type submitQuestion = (
  e: React.FormEvent<HTMLFormElement>,
  selectedAnswers: selectionType,
  setSelectedAnswers: React.Dispatch<React.SetStateAction<selectionType>>
) => void;

type propTypes = {
  submitQuestion: submitQuestion;
  currentQuestion: questionType;
};

// functional component starts
export default function QuestionForm({
  submitQuestion,
  currentQuestion,
}: propTypes) {
  const [selectedAnswers, setSelectedAnswers] = React.useState<selectionType>({
    1: false,
    2: false,
    3: false,
    4: false,
  });


  // need to fix the below type error
  // move the below function to utils
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.name;
    setSelectedAnswers((preval) => {
      return { ...preval, [value]: !(preval as any)[value] };
    });
  };

  return (
    <form
      onSubmit={(e) => submitQuestion(e, selectedAnswers, setSelectedAnswers)}
      className="questionArea w-full bg-white p-3 rounded flex flex-col justify-between max-w-xl gap-5 shadow"
    >
      <h3 className="question font-bold">{currentQuestion.ques}</h3>

      <div className="options flex  flex-col gap-2">
        <div className="flex items-center gap-3">
          <input
            className="w-5 h-5"
            type="checkbox"
            id="one"
            name="1"
            value="1"
            checked={selectedAnswers[1]}
            onChange={(e) => changeHandler(e)}
          />
          <label className="w-full" htmlFor="one">
            {" "}
            {currentQuestion.choice[1]}
          </label>
        </div>
        <hr></hr>
        <div className="flex items-center gap-3">
          <input
            className="w-5 h-5"
            type="checkbox"
            id="2"
            name="2"
            value="Bike"
            checked={selectedAnswers[2]}
            onChange={(e) => changeHandler(e)}
          />
          <label className="w-full" htmlFor="2">
            {" "}
            {currentQuestion.choice[2]}
          </label>
        </div>
        <hr></hr>
        <div className="flex items-center gap-3">
          <input
            className="w-5 h-5"
            type="checkbox"
            id="3"
            name="3"
            value="Bike"
            checked={selectedAnswers[3]}
            onChange={(e) => changeHandler(e)}
          />
          <label className="w-full" htmlFor="3">
            {" "}
            {currentQuestion.choice[3]}
          </label>
        </div>
        <hr></hr>
        <div className="flex items-center gap-3">
          <input
            className="w-5 h-5"
            type="checkbox"
            id="4"
            name="4"
            value="Bike"
            checked={selectedAnswers[4]}
            onChange={(e) => changeHandler(e)}
          />
          <label className="w-full " htmlFor="4">
            {" "}
            {currentQuestion.choice[4]}
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="bg-green-500 py-2 rounded text-xl text-white"
      >
        Next Question
      </button>
    </form>
  );
}
// functional component ends
