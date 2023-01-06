import React from 'react'
import Router from 'next/router';

//component
import ScoreGraph from './ScoreGraph';

// font awesome
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// user context
import { UserContext } from '../lib/contextAPI/userContext';

//types
type propTypes = {
  scoreArray : Number[]
  showCrossBtn : Boolean
  showGoToDashBtn: Boolean
}


export default function ScoreGraphModal({scoreArray , showCrossBtn , showGoToDashBtn} : propTypes) {
    const { setGraphModal } = React.useContext(UserContext);
    return (
      <div className="quizcreateModal absolute w-full h-full  bg-black bg-opacity-80 box-border p-5 flex justify-center items-center">
        <div className="w-full bg-white rounded relative max-w-xl p-5 flex flex-col gap-6 justify-center items-center">
          {showCrossBtn && <FontAwesomeIcon
            onClick={() => setGraphModal(false)}
            className="absolute right-3 top-3 text-2xl"
            icon={faClose}
          />}
  
          <h2 className="text-center text-2xl font-semibold underline">
            Your Score : {Number(scoreArray[scoreArray.length-1])}
          </h2>
  
          <ScoreGraph  scoreArray={scoreArray}/>
  
          {showGoToDashBtn && <button onClick={()=>Router.push("/user/dashboard")} className="w-full bg-green-500 py-2 rounded shadow text-xl text-white">
            Go To Dashboard
          </button>}
        </div>
      </div>
    );
  }
