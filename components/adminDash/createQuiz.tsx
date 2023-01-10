import React from "react";

//components
import CreateQuizModal from "./createQuizModal";

//cookies
import { useCookies } from "react-cookie";

//axios
import axios, { AxiosError } from "axios";

//context
import { createQuizContext } from "../../lib/contextAPI/createQuizContext";
import { handleClickEvent } from "../../lib/utils";

//types
import { questionType } from "../../lib/questions";

export function CreateQuiz() {
    const [nameErrMsg, setNameErrMsg] = React.useState<String | null>(null);
    const [questionLengthErrorMsg , setQuestionLengthErrorMsg] = React.useState<string | null>(null)
    const { setCreateQuizModal } = React.useContext(createQuizContext);
    const [cookies, setCookies] = useCookies(["quizify"]);
  
    const createQuiz = async (quizName : string , questionSet : questionType[]) => {

      const totalQuestions = questionSet.length;
      if(totalQuestions !== 10){
        setQuestionLengthErrorMsg("Please provide 10 questions")
        return
      }
      if (quizName && totalQuestions) {
        const createQuizBody = {
          quizName: quizName,
          totalQuestions: totalQuestions,
          category: "javascript",
          createdBy: "will be changed in the backend",
          questionSet: questionSet,
        };
        // call the api and close the modal upon success
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/quiz/create`,
            createQuizBody,
            {
              headers: {
                Authorization: cookies.quizify,
              },
            }
          );
          // close quiz modal
          console.log(response)
          setCreateQuizModal(false)
        } catch (error) {
          if(error instanceof AxiosError){
            setNameErrMsg(error.response?.data.message)
          }
          console.log(error)
        }
      } else if (!quizName) {
        setNameErrMsg("Name cannot be empty");
      }
    };
  
    // To close the modal when we click away from the modal (outfocus)   =>uncomment the below code
    // React.useState(() => {
    //   window.addEventListener("click", (e) =>
    //     handleClickEvent(e, setCreateQuizModal, ".quizcreateModal")
    //   );
  
    //   return () => {
    //     window.removeEventListener("click", (e) =>
    //       handleClickEvent(e, setCreateQuizModal, ".quizcreateModal")
    //     );
    //   };
    // });
  
    return (
      <div className="quizcreateModal absolute w-full min-h-screen  bg-black bg-opacity-80 box-border p-5 flex justify-center items-center overflow-scroll">
        <CreateQuizModal createQuiz={createQuiz} nameErrMsg={nameErrMsg} questionLengthErrorMsg={questionLengthErrorMsg}/>
      </div>
    );
  }
  