import { addSyntheticLeadingComment } from "typescript";


export const handleClickEvent = (e: MouseEvent , toggleFunc : React.Dispatch<React.SetStateAction<Boolean>> ,element : String)=> {

    if (e.target!.matches(element)) {
        toggleFunc(false);
    }
  }

  