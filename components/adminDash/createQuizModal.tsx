import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faAdd } from "@fortawesome/free-solid-svg-icons";

// context api
import { createQuizContext } from "../../lib/contextAPI/createQuizContext";
import { questionType } from "../../lib/questions";
import AddQuestionForm from "./addQuestionForm";

// Types
type errorMsg = String | null;
type createQuizFunc = (quizName: string, questionSet: questionType[]) => void;
type propTypes = {
  createQuiz: createQuizFunc;
  nameErrMsg: errorMsg;
};

// function component starts
export default function CreateQuizModal({ createQuiz, nameErrMsg }: propTypes) {
  const [quizName, setQuizName] = React.useState("");
  const [addedQuestions, setAddedQuestions] = React.useState<
    questionType[] | []
  >([]);
  const { closeCreateQuizModal } = React.useContext(createQuizContext);

  return (
    <div
      id="quizCreateForm"
      className="quizCreateForm w-full max-w-md bg-white rounded-xl shadow p-5 flex flex-col justify-between gap-5 relative"
    >
      <FontAwesomeIcon
        onClick={() => closeCreateQuizModal()}
        className="absolute right-3 top-3 text-2xl"
        icon={faClose}
      />

      <div className="flex flex-col gap-2">
        <label>Name Of Quiz*</label>
        <input
          className="border border-gray-400 rounded h-10 px-2"
          type={"text"}
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
        />
        {nameErrMsg && <p className="text-red-500 text-sm">{nameErrMsg}</p>}
      </div>

      {/* add question form */}
      <AddQuestionForm />  

      <h2 className="text-center">
        Total Questions Added : {addedQuestions.length}
      </h2>
      <p className="text-xs text-center text-gray-400">{`Press the below button to ${
        !Boolean(addedQuestions.length) ? "start adding" : "add more"
      } questions`}</p>

      

      <FontAwesomeIcon
        icon={faAdd}
        className="bg-green-500 shadow-md rounded-full text-xl w-5 p-2 text-white self-center"
      />

      <button
        onClick={() => createQuiz("asd", addedQuestions)}
        disabled={addedQuestions.length ? false : true}
        className={`${
          addedQuestions.length ? "bg-green-500" : "bg-gray-400"
        } py-2 rounded shadow text-white text-xl`}
      >
        Create Quiz
      </button>
    </div>
  );
}
// function component ends
