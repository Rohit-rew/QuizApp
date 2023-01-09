import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";

// user context
import { UserContext } from "../../lib/contextAPI/userContext";

// types 
import { quizType } from "../../lib/types/type";
type propTypes = {
    quiz : quizType
}

export default function UserQuizInfo({quiz} : propTypes) {
  const [isGraphOpen  , setGraph] = React.useState(false)

  const {setGraphModal} = React.useContext(UserContext)

  return (
    <div className="quiz w-full bg-white rounded shadow p-3 relative flex flex-col gap-1">
      <p className="text-3xl ">{quiz.quizName}</p>
      <p className="text-xs text-gray-600">Status : Completed </p>
      <p className="text-xs text-gray-600">
        Completed At : 3 Jan 2023 10:30 am IST
      </p>
      <p className="text-xs text-gray-600">Quiz Id : hj123eghjg24r3eh</p>

      <p className="absolute top-3 right-3 text-2xl">Score: 50</p>

      <button onClick={()=>setGraphModal(true)} className=" absolute right-3 bottom-3 w-10 h-10  border border-black rounded-full flex justify-center items-center text-4xl text-white">
        <FontAwesomeIcon className="text-2xl text-black" icon={faRankingStar} />{" "}
      </button>

    </div>
  );
}




