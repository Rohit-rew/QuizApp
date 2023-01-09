import React from "react";


//font awesome
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//types
import { selectionType } from "../../lib/types/type";
import { changeHandler, getAnsArray } from "../../lib/utils";

export default function AddQuestionForm() {

    const [hasMultipleAns , setHasMultipleAns] = React.useState(false)
    const [selectedAnswers, setSelectedAnswers] = React.useState<selectionType>({
        1: true,
        2: false,
        3: false,
        4: false,
      });


  const addQuestion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ques = e.currentTarget.question.value
    const option1 = e.currentTarget.option1.value
    const option2 = e.currentTarget.option1.value
    const option3 = e.currentTarget.option1.value
    const option4 = e.currentTarget.option1.value
    const hasMultipleAnswers = hasMultipleAns
    let ans : number[] = []

    if(hasMultipleAnswers){
        ans = getAnsArray(selectedAnswers)
    }else{
        ans = e.currentTarget.options.value
    }


    const question = {
        ques : ques,
        choice : {
            1: option1,
            2: option2,
            3: option3,
            4: option4,
        },
        hasMultipleAns : hasMultipleAnswers,
        answer : [...ans],
        difficultyLevel : 10
    }

    console.log(question)
  };

  return (
    <form
      onSubmit={(e) => addQuestion(e)}
      className="w-full rounded  shadow-md p-3 flex flex-col  gap-3 border border-green-500"
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
          <input type="checkbox" onChange={()=>setHasMultipleAns(preval=>!preval)}/>
          <span className="slider round"></span>
        </label>
      </div>

      {!hasMultipleAns && <div className="flex justify-between">
        <label htmlFor="options">Select your answer</label>
        <select className="p-1" name="options" id="options">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </select>
      </div>}

      {hasMultipleAns && <div className="flex flex-col w-full border rounded border-gray-500 p-1 gap-2">
            Select Multiple answers
            {/* <FontAwesomeIcon className="text-green-500" icon={faArrowCircleDown}/> */}

            <div className="flex items-center gap-3">
                <input
                    className="w-5 h-5"
                    type="checkbox"
                    id="1"
                    name="1"
                    checked={selectedAnswers[1]}
                    onChange={(e) => changeHandler(e , setSelectedAnswers)}
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
                    onChange={(e) => changeHandler(e , setSelectedAnswers)}
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
                    onChange={(e) => changeHandler(e , setSelectedAnswers)}
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
                    onChange={(e) => changeHandler(e , setSelectedAnswers)}
                />
                <label className="w-full" htmlFor="4">
                    Option 4
                </label>
            </div>
      </div>}

       

      <button type="submit" className="bg-green-500 rounded text-white py-2">
        Add question
      </button>
    </form>
  );
}
