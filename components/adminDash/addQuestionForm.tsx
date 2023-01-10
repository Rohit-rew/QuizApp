import React from "react";

//font awesome
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//types
import { selectionType } from "../../lib/types/type";
import { changeHandler, getAnsArray } from "../../lib/utils";
type propTypes = {
  addQuestion: (
    e: React.FormEvent<HTMLFormElement>,
    hasMultipleAns: boolean,
    selectedAnswers: selectionType
  ) => void;
  addQuestionFormError : string | null
  difficultyOptions : number[]
};

export default function AddQuestionForm({ addQuestion , addQuestionFormError , difficultyOptions }: propTypes) {
  const [hasMultipleAns, setHasMultipleAns] = React.useState(false);
  const [selectedAnswers, setSelectedAnswers] = React.useState<selectionType>({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  console.log(selectedAnswers)

  return (
    <form
      onSubmit={(e) => addQuestion(e, hasMultipleAns, selectedAnswers)}
      className="w-full rounded  shadow-md p-3 flex flex-col gap-3 border border-green-500"
    >
      <label>Enter your question:</label>
      <input
        className="border border-gray-400 rounded h-7 px-1 w-full"
        type={"text"}
        id="question"
      />
      <div className="flex justify-between">
        <label>Option 1:</label>
        <input
          className="border border-gray-400 rounded h-7 px-1 w-3/5"
          type={"text"}
          id="option1"
        />
      </div>
      <div className="flex justify-between">
        <label>Option 2:</label>
        <input
          className="border border-gray-400 rounded h-7 px-1 w-3/5"
          type={"text"}
          id="option2"
        />
      </div>
      <div className="flex justify-between">
        <label>Option 3:</label>
        <input
          className="border border-gray-400 rounded h-7 px-1 w-3/5"
          type={"text"}
          id="option3"
        />
      </div>
      <div className="flex justify-between">
        <label>Option 4:</label>
        <input
          className="border border-gray-400 rounded px-1 h-7 w-3/5"
          type={"text"}
          id="option4"
        />
      </div>

      {/* toggle switch  */}
      <div className="w-full flex justify-between">
        <p>Has Multiple answers: </p>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setHasMultipleAns((preval) => !preval)}
          />
          <span className="slider round"></span>
        </label>
      </div>

      {!hasMultipleAns && (
        <div className="flex justify-between">
          <label htmlFor="options">Select your answer</label>
          <select className="p-1" name="options" id="options">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
          </select>
        </div>
      )}

      {hasMultipleAns && (
        <div className="flex flex-col w-full border rounded border-gray-400 p-1 gap-2">
          Select Multiple answers
          {/* <FontAwesomeIcon className="text-green-500" icon={faArrowCircleDown}/> */}
          <div className="flex items-center gap-3">
            <input
              className="w-5 h-5"
              type="checkbox"
              id="1"
              name="1"
              checked={selectedAnswers[1]}
              onChange={(e) => changeHandler(e, setSelectedAnswers)}
            />
            <label className="w-full" htmlFor="1">
              Option 1
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              className="w-5 h-5"
              type="checkbox"
              id="2"
              name="2"
              checked={selectedAnswers[2]}
              onChange={(e) => changeHandler(e, setSelectedAnswers)}
            />
            <label className="w-full" htmlFor="2">
              Option 2
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              className="w-5 h-5"
              type="checkbox"
              id="3"
              name="3"
              checked={selectedAnswers[3]}
              onChange={(e) => changeHandler(e, setSelectedAnswers)}
            />
            <label className="w-full" htmlFor="3">
              Option 3
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              className="w-5 h-5"
              type="checkbox"
              id="4"
              name="4"
              checked={selectedAnswers[4]}
              onChange={(e) => changeHandler(e, setSelectedAnswers)}
            />
            <label className="w-full" htmlFor="4">
              Option 4
            </label>
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <label htmlFor="diffLevel">Difficulty Level</label>
        <select className="p-1" name="diffLevel" id="diffLevel">
          {difficultyOptions.map((option , i)=><option key={i} value={option}>{option}</option>)}
        </select>
      </div>

    <p className="text-red-500">{addQuestionFormError}</p>
      <button type="submit" className="bg-green-500 rounded text-white py-2">
        Add question
      </button>
    </form>
  );
}
