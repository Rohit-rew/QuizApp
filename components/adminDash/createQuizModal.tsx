import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faAdd } from "@fortawesome/free-solid-svg-icons";

// context api
import { createQuizContext } from "../../lib/contextAPI/createQuizContext";

//components
import AddQuestionForm from "./addQuestionForm";

//utils
import { getAnsArray } from "../../lib/utils";

// Types
import { questionType } from "../../lib/questions";
import { selectionType } from "../../lib/types/type";
import DisabledQuestionForm from "./disabledQuestionForm";
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
  const [addQuestionFormIsOpen , setAddQuestionForm] = React.useState<boolean>(false)
  const [addQuestionFormError , setAddQuestionFormError] = React.useState<string | null>(null)
  const { closeCreateQuizModal } = React.useContext(createQuizContext);


  const addQuestion = (e: React.FormEvent<HTMLFormElement> , hasMultipleAns:boolean ,selectedAnswers:selectionType ) => {
    e.preventDefault();
    setAddQuestionFormError(null)
    const ques = e.currentTarget.question.value
    const option1 = e.currentTarget.option1.value
    const option2 = e.currentTarget.option1.value
    const option3 = e.currentTarget.option1.value
    const option4 = e.currentTarget.option1.value
    const dificultyLevel = Number(e.currentTarget.diffLevel.value)
    let ans : number[] = []

    
    if(hasMultipleAns){
      ans = getAnsArray(selectedAnswers)
    }else{
      ans = e.currentTarget.options.value
    }
    
    if(!ques || !option1 || !option2 || !option3 || !option4 || !dificultyLevel || !ans.length ){
      // send error
      setAddQuestionFormError("All fields are required")
      return
    }else if(ans.length == 1 && hasMultipleAns){
      setAddQuestionFormError("Select more that 1 ans or switch to single answer mode")
      return
    }

    const question = {
        ques : ques,
        choice : {
            1: option1,
            2: option2,
            3: option3,
            4: option4,
        },
        hasMultipleAns : hasMultipleAns,
        answer : [...ans],
        difficultyLevel : dificultyLevel
    }
    console.log(question)
    setAddedQuestions(preval=> [...preval , question])
    setAddQuestionForm(false)
  };

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
        <label className="text-bold text-xl">Name Of Quiz*</label>
        <input
          className="border border-gray-400 rounded h-10 px-2"
          type={"text"}
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
        />
        {nameErrMsg || <p className="text-red-500 text-sm">{nameErrMsg}</p>}
      </div>

      {/* show added questions here in the disabled form */}
      {addedQuestions.map((question , i)=>{
        return <DisabledQuestionForm key={i} question={question}/>
      })}

      {/* add question form */}
      {addQuestionFormIsOpen && <AddQuestionForm addQuestion={addQuestion} addQuestionFormError={addQuestionFormError}/>}  

      <h2 className="text-center">
        Total Questions Added : {addedQuestions.length}
      </h2>
      <p className="text-xs text-center text-gray-400">{`Press the below button to ${
        !Boolean(addedQuestions.length) ? "start adding" : "add more"
      } questions`}</p>

      

      <FontAwesomeIcon
      onClick={()=>setAddQuestionForm(true)}
        icon={faAdd}
        className="bg-green-500 shadow-md rounded-full text-xl w-5 p-2 text-white self-center"
      />

      <button
        onClick={() => createQuiz(quizName, addedQuestions)}
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
