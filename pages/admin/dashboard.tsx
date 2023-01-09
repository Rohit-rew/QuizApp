import React from "react";

// components imports
import DashFooter from "../../components/DashFooter";
import AdminDashHeader from "../../components/adminDash/adminDashHeader";
import QuizInfo from "../../components/adminDash/adminquizInfo";
import EmptyMessage from "../../components/emptyMessage";
import { CreateQuiz } from "../../components/adminDash/createQuiz";


// context import
import { createQuizContext } from "../../lib/contextAPI/createQuizContext";

// cookies
import { useCookies } from "react-cookie";

//jose
import * as jose from "jose";

//axios
import axios from "axios";

//types
export type adminData = {
  name: string;
  email: string;
  admin: boolean;
  id: string;
};

//function component starts
export default function AdminDash() {
  const [adminData, setAdminData] = React.useState<adminData>();
  const [cookies, setCookies] = useCookies(["quizify"]);
  const [quizes , setQuiz] = React.useState([]);
  // context consumed
  const { createQuizModalOpen } = React.useContext(createQuizContext);
  console.log(quizes)
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
        const quizIdArray = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/quiz/getAll` , {headers : {
          Authorization: cookies.quizify,
        }})
        setQuiz(quizIdArray.data)
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

