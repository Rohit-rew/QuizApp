import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// context api
import { createQuizContext } from "../../lib/contextAPI/createQuizContext";

// Types
type errorMsg = String | null;
type createQuizFunc = (e:React.FormEvent<HTMLFormElement>)=>void
type propTypes = {
    createQuiz : createQuizFunc,
    nameErrMsg : errorMsg
}

// function component starts
export default function CreateQuizForm({createQuiz , nameErrMsg} : propTypes) {

    const {closeCreateQuizModal} = React.useContext(createQuizContext)

  return (
    <form
    id="quizCreateForm"
      onSubmit={(e) => createQuiz(e)}
      className="quizCreateForm w-full max-w-md bg-white rounded-xl shadow p-5 flex flex-col justify-between gap-5 relative"
    >
      <FontAwesomeIcon
      onClick={()=>closeCreateQuizModal()}
        className="absolute right-3 top-3 text-2xl"
        icon={faClose}
      />

      <div className="flex flex-col gap-2 h-24">
        <label>Name Of Quiz*</label>
        <input
          id="quizName"
          className="border border-gray-400 rounded h-10 px-2"
          type={"text"}
        />
        {nameErrMsg && <p className="text-red-500 text-sm">{nameErrMsg}</p>}
      </div>

      <div className="flex justify-between">
        <label>
          Number Of <br></br> Questions
        </label>
        <input
          id="totalQuestions"
          className="border border-gray-400 rounded h-10 px-2 w-1/4"
          type={"number"}
          defaultValue={10}
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 py-2 rounded shadow text-white text-xl"
      >
        Create Quiz
      </button>
    </form>
  );
}
// function component ends
