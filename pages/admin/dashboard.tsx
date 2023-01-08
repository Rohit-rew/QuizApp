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

// cookies
import { useCookies } from "react-cookie";

//jose
import * as jose from "jose";

//axios
import axios, { AxiosError } from "axios";
import { questionSet } from "../../lib/questions";

//types
export type adminData = {
  name: string;
  email: string;
  admin: boolean;
  id: string;
};

//function component starts
export default function AdminDash() {
  const quizes = [
    { quizName: "This is a quiz", totalQuestions: 10 },
    { quizName: "This is a quiz", totalQuestions: 10 },
    { quizName: "This is a quiz", totalQuestions: 10 },
  ];
  const [adminData, setAdminData] = React.useState<adminData>();
  const [cookies, setCookies] = useCookies(["quizify"]);
  // context consumed
  const { createQuizModalOpen } = React.useContext(createQuizContext);
  console.log(adminData)
  React.useEffect(() => {
    async function getAdminDataFromCookies() {
      const jwt = cookies.quizify;
      if(!jwt) return //need to send the user to loginpage
      const decodedJwt = await jose.jwtVerify(
        jwt,
        new TextEncoder().encode("quizify")
      );
      const { name, email, admin, id }: adminData =
        decodedJwt.payload as adminData;
      setAdminData({ name, email, admin, id });
    }
    getAdminDataFromCookies();

    // make api call to get all quized related to admin

    async function  getAdminQuizes(){
      try {
        const quizIdArray = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/find` , {headers : {
          Authorization: cookies.quizify,
        }})
        console.log(quizIdArray.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAdminQuizes()


  }, [cookies , createQuizModalOpen]);

  return (
    <div className="dashboard background-gradient background-image w-full min-h-screen bg-green-500 flex flex-col gap-5 items-center relative">
      <AdminDashHeader name={adminData?.name} />
      <div className="p-5 w-full flex flex-col gap-5 max-w-xl h-full">
        {!Boolean(quizes.length) && (
          <EmptyMessage message="You do not have created any quiz yet. Click on the above add icon to create a quiz" />
        )}

        {Boolean(quizes.length) && (
          <div className="flex flex-col gap-5 pb-20">
            {quizes.map((quiz, i) => {
              return <QuizInfo key={i} quiz={quiz} />;
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
  const [cookies, setCookies] = useCookies(["quizify"]);

  const createQuiz = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const quizName = e.currentTarget.quizName.value;
    const totalQuestions = e.currentTarget.totalQuestions.value;

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
