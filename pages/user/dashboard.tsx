import React from "react";

//components
import DashFooter from "../../components/DashFooter";
import UserDashHeader from "../../components/userDash/userDashHeader";
import EmptyMessage from "../../components/emptyMessage";
import UserQuizInfo from "../../components/userDash/userquizinfo";
import ScoreGraphModal from "../../components/scoreGraphModal";


//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons";

//search context
import { UserContext } from "../../lib/contextAPI/userContext";

export default function Dashboard() {
  const quizCompleted = [{ quizName: "First Quiz" }];

  const { isSearchOpen, isGraphModalOpen } = React.useContext(UserContext);

  return (
    <div className="dashboard background-gradient background-image w-full min-h-screen bg-green-500 flex flex-col gap-5 items-center relative">
      <UserDashHeader />

      <div className="p-5 w-full flex flex-col gap-5 max-w-xl h-full">
        {/* Search box */}
        {isSearchOpen && (
          <div className="flex w-full">
            <input
              className="h-10 px-2 rounded-l-md pr-10 w-full"
              placeholder="Enter quiz id eg : 3c4rb678f3c4vt"
            />
            <button className="bg-black w-10 rounded rounded-r-md">
              <FontAwesomeIcon
                className="text-2xl text-white"
                icon={faSearch}
              />
            </button>
          </div>
        )}

        {/* Empty message */}
        {!Boolean(quizCompleted.length) && (
          <EmptyMessage message="You don't have completed any quiz yet" />
        )}

        {/* Quiz info card */}
        {Boolean(quizCompleted.length) && (
          <div className="flex flex-col gap-5 pb-20">
            {quizCompleted.map((quiz, i) => {
              return <UserQuizInfo key={i} quiz={quiz} />;
            })}
          </div>
        )}
      </div>

      {isGraphModalOpen && <ScoreGraphModal scoreArray={[5,10,15,20,25,30]} showCrossBtn={true} showGoToDashBtn={false}/>}

      <DashFooter />
    </div>
  );
}


