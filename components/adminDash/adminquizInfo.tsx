import React from "react";
import Image from "next/image";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";


// types
import { quizType } from "../../lib/types/type";
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

    const copyUrl = ()=>{
      navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}${quiz._id}`)
      showCopyMessage()
    }

    const date = new Date(quiz.createdAt)

  return (
    <div className="quiz w-full bg-white rounded shadow p-3 relative flex flex-col gap-1">
      <p className="text-3xl ">{quiz.quizName}</p>
      <p className="text-xs text-gray-600">Status : Completed </p>
      <p className="text-xs text-gray-600">
        created At: {date.toLocaleString()}
      </p>
      <p className="text-xs text-gray-600">Quiz Id : {quiz._id}</p>

      <Image className="absolute right-0 top-0 opacity-10 -rotate-45" src={"/question.png"} alt="" width={60} height={60}/>

      {copyMsgIsShown && <span className="bg-gray-200 px-2 py-1 absolute right-3 bottom-10 rounded">Link Copied</span>}
      <FontAwesomeIcon
        onClick={()=>copyUrl()}
        className="absolute right-3 bottom-3 text-2xl"
        icon={faCopy}
      />
    </div>
  );
}


