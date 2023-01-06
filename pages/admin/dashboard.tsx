import React from "react";

// components imports
import DashFooter from "../../components/DashFooter";
import AdminDashHeader from "../../components/adminDash/adminDashHeader";
import CreateQuizForm from "../../components/adminDash/createQuizForm";
import QuizInfo from "../../components/adminDash/adminquizInfo";
import EmptyMessage from "../../components/emptyMessage";


// context import
import { createQuizContext } from "../../lib/contextAPI/createQuizContext";
import { handleClickEvent } from "../../lib/utils";


//function component starts
export default function AdminDash() {
  const quizes = [
    { quizName: "This is a quiz" , totalQuestions : 10 },
    { quizName: "This is a quiz", totalQuestions : 10 },
    { quizName: "This is a quiz", totalQuestions : 10 },
  ];

  // context consumed
  const { createQuizModalOpen } = React.useContext(createQuizContext);

  return (
    <div className="dashboard background-gradient background-image w-full min-h-screen bg-green-500 flex flex-col gap-5 items-center relative">
      <AdminDashHeader />
      <div className="p-5 w-full flex flex-col gap-5 max-w-xl h-full">
        {!Boolean(quizes.length) && <EmptyMessage  message="You do not have created any quiz yet. Click on the above add icon to create a quiz"/>}

        {Boolean(quizes.length) && (
          <div className="flex flex-col gap-5 pb-20">
            {quizes.map((quiz) => {
              return <QuizInfo quiz={quiz}/>
            })}
          </div>
        )}
      </div>
      <DashFooter />
      {createQuizModalOpen && <CreateQuiz />}
    </div>
  );
}

export function CreateQuiz() {
  const [nameErrMsg, setNameErrMsg] = React.useState<String | null>(null);
  const { setCreateQuizModal } = React.useContext(createQuizContext);

  const createQuiz = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const quizName = e.currentTarget.quizName.value;
    const totalQuestions = e.currentTarget.totalQuestions.value;

    if (quizName && totalQuestions) {
      console.log("submitted");
      console.log(quizName, totalQuestions);
      // call the api and close the modal upon success
    } else if (!quizName) {
      setNameErrMsg("Name cannot be empty");
    }
  };

  // To close the modal when we click away from the modal (outfocus)
  React.useState(() => {
    window.addEventListener("click", (e) =>
      handleClickEvent(e, setCreateQuizModal, ".quizcreateModal")
    );

    return () => {
      window.removeEventListener("click", (e) =>
        handleClickEvent(e, setCreateQuizModal, ".quizcreateModal")
      );
    };
  });

  return (
    <div className="quizcreateModal absolute w-full h-full  bg-black bg-opacity-80 box-border p-5 flex justify-center items-center">
      <CreateQuizForm createQuiz={createQuiz} nameErrMsg={nameErrMsg} />
    </div>
  );
}
