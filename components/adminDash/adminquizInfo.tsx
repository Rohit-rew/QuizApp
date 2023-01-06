import React from "react";
import Image from "next/image";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

// types
type quizType = {
  quizName: String
  totalQuestions : Number
};

type propTypes = {
  quiz: quizType;
};

export default function AdminQuizInfo({ quiz }: propTypes) {
    const [copyMsgIsShown , setCopyMsg] = React.useState<Boolean>(false)

    const showCopyMessage = ()=>{
        setCopyMsg(true) 

        setTimeout(()=>{
            setCopyMsg( (preval)=>{
                return false
            })
        }, 1500)
    }

  return (
    <div className="quiz w-full bg-white rounded shadow p-3 relative flex flex-col gap-1">
      <p className="text-3xl ">{quiz.quizName}</p>
      <p className="text-xs text-gray-600">Status : Completed </p>
      <p className="text-xs text-gray-600">
        Created At : 3 Jan 2023 10:30 am IST
      </p>
      <p className="text-xs text-gray-600">Quiz Id : hj123eghjg24r3eh</p>

      <Image className="absolute right-0 top-0 opacity-10 -rotate-45" src={"/question.png"} alt="" width={60} height={60}/>

      {copyMsgIsShown && <span className="bg-gray-200 px-2 py-1 absolute right-3 bottom-10 rounded">Link Copied</span>}
      <FontAwesomeIcon
        onClick={()=>showCopyMessage()}
        className="absolute right-3 bottom-3 text-2xl"
        icon={faCopy}
      />
    </div>
  );
}
