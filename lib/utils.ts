import { addSyntheticLeadingComment } from "typescript";
import { selectionType } from "./types/type";


export const handleClickEvent = (e: MouseEvent , toggleFunc : React.Dispatch<React.SetStateAction<Boolean>> ,element : String)=> {

    if (e.target!.matches(element)) {
        toggleFunc(false);
    }
}


export const getAnsArray = (selectedAnswers:selectionType)=>{
    let ansArray = []
    for (let property in selectedAnswers){
      console.log(property)
      if(selectedAnswers[Number(property)] == true){
        ansArray.push(Number(property))
      }
    }
    return ansArray
  }
  