import React from "react";

//font awesome
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//types
import { selectionType } from "../../lib/types/type";
import { questionType } from "../../lib/questions";
import { ansArrayToObject } from "../../lib/utils";

type propTypes = {
    question : questionType
}

export default function DisabledQuestionForm({question} : propTypes) {
  const [hasMultipleAns, setHasMultipleAns] = React.useState(question.hasMultipleAns);
  const [selectedAnswers, setSelectedAnswers] = React.useState<selectionType>(()=>ansArrayToObject(question.answer));

  


  return (
    <form
    //   onSubmit={(e) => addQuestion(e, hasMultipleAns, selectedAnswers)}
      className="w-full rounded  shadow-md p-3 flex flex-col gap-3 border border-gray-400 bg-gray-200"
    >
      <label>Enter your question:</label>
      <input
        defaultValue={question.ques}
        disabled={true}
        className="border border-gray-400 rounded h-7 px-1 w-full"
        type={"text"}
        id="question"
      />
      <div className="flex justify-between">
        <label>Option 1:</label>
        <input
        disabled={true}
        defaultValue={question.choice[1]}
          className="border border-gray-400 rounded h-7 px-1 w-3/5"
          type={"text"}
          id="option1"
        />
      </div>
      <div className="flex justify-between">
        <label>Option 2:</label>
        <input
         disabled={true}
         defaultValue={question.choice[2]}
          className="border border-gray-400 rounded h-7 px-1 w-3/5"
          type={"text"}
          id="option2"
        />
      </div>
      <div className="flex justify-between">
        <label>Option 3:</label>
        <input
          disabled={true}
          defaultValue={question.choice[3]}
          className="border border-gray-400 rounded h-7 px-1 w-3/5"
          type={"text"}
          id="option3"
        />
      </div>
      <div className="flex justify-between">
        <label>Option 4:</label>
        <input
          disabled={true}
          defaultValue={question.choice[4]}
          className="border border-gray-400 rounded px-1 h-7 w-3/5"
          type={"text"}
          id="option4"
        />
      </div>

      {/* toggle switch  */}
      <div className="w-full flex justify-between">
        <p>Has Multiple answers: </p>
        <label className="switch" >
          <input
          disabled
          className="toggleinput-disabled"
          defaultChecked={question.hasMultipleAns}
            type="checkbox"
            onChange={() => setHasMultipleAns((preval) => !preval)}
          />
          <span className="slider round"></span>
        </label>
      </div>

      {!hasMultipleAns && (
        <div className="flex justify-between">
          <label htmlFor="options">Select your answer</label>
          <select className="p-1" name="options" id="options" disabled defaultValue={"asd"}>
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
            disabled
              className="w-5 h-5"
              type="checkbox"
              id="1"
              name="1"
              checked={selectedAnswers[1]}
            //   onChange={(e) => changeHandler(e, setSelectedAnswers)}
            />
            <label className="w-full" htmlFor="1">
              Option 1
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
            disabled
              className="w-5 h-5"
              type="checkbox"
              id="2"
              name="2"
              checked={selectedAnswers[2]}
            //   onChange={(e) => changeHandler(e, setSelectedAnswers)}
            />
            <label className="w-full" htmlFor="2">
              Option 2
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
            disabled
              className="w-5 h-5"
              type="checkbox"
              id="3"
              name="3"
              checked={selectedAnswers[3]}
            //   onChange={(e) => changeHandler(e, setSelectedAnswers)}
            />
            <label className="w-full" htmlFor="3">
              Option 3
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
            disabled
              className="w-5 h-5"
              type="checkbox"
              id="4"
              name="4"
              checked={selectedAnswers[4]}
            //   onChange={(e) => changeHandler(e, setSelectedAnswers)}
            />
            <label className="w-full" htmlFor="4">
              Option 4
            </label>
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <label htmlFor="diffLevel">Difficulty Level</label>
        <select className="p-1" name="diffLevel" id="diffLevel" defaultValue={question.difficultyLevel}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

    </form>
  );
}
