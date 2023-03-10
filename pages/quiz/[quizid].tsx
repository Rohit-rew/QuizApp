import React from "react";
import Image from "next/image";
import Router, {  useRouter } from "next/router";
Router

//components
import QuizInfoTable from "../../components/Quiz/quizInfoTable";

//axios
import axios from "axios";

//types
import { questionType } from "../../lib/questions";
import QuizStarted from "../../components/Quiz/quizstarted";
import { useCookies } from "react-cookie";
import Error from "next/error";
type quizType = {
  quizName : string
  totalQuestions :number
  createdBy :string
  category :string
  _id : string
  questionSet : questionType[]
}

export default function Quiz() {

  const [quiz , setQuiz] = React.useState<quizType | null>(null)
  const [quizStarted , setQuizStarted] = React.useState(false)
  const [cookies , setCookies] = useCookies(["quizify"])

  const {query} = useRouter()
  const quizId = query.quizid

  React.useEffect(()=>{
    if(!quizId)return 
    if(!cookies.quizify) return 

    const getQUizInfo = async ()=>{
      try {
        const quiz = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/quiz/${quizId}` , {headers : {
          Authorization : cookies.quizify
        }})
        setQuiz(quiz.data)
      } catch (error) {
        console.log(error)
        Router.push("/404")
        return <Error statusCode={404} />
      }

    }
    getQUizInfo()
  })


  return (
    <>
    {!(quizStarted && quiz) && <div className="dashboard background-gradient background-image w-full min-h-screen bg-green-500 flex flex-col gap- items-center relative p-5 sm:justify-around">
      <h1 className="text-center text-5xl font-semibold leading-20">
        Welcome to
      </h1>
      <Image alt="" src={"/mainimage.png"} width={200} height={200} />

      <div className="flex flex-col w-full gap-16 max-w-xl ">
        <div className="quizInfo w-full flex bg-white rounded p-4 flex flex-col gap-5">
          <p className="text-3xl text-center w-full">Quiz Info</p>
        
            {/* Need to send the quiz data to the quiz table */}
          <QuizInfoTable category={quiz?.category} createdBy={quiz?.createdBy} id={quiz?._id} quizName={quiz?.quizName} totalQuestions={quiz?.totalQuestions} />
        </div>

        <button onClick={()=>setQuizStarted(true)} className="border border-white rounded-2xl shadow py-4 text-xl bg-white font-semibold hover:border-red-500 w-full">
          Start Quiz
        </button>
      </div>
    </div>}
      {/* fix the below type error  */}
      {(quizStarted && quiz) &&  <QuizStarted questionSet={quiz?.questionSet}/>}
      </>
  );
}



