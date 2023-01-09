import { selectionType } from "./types/type";

export const handleClickEvent = (
  e: MouseEvent,
  toggleFunc: React.Dispatch<React.SetStateAction<Boolean>>,
  element: String
) => {
  if (e.target!.matches(element)) {
    toggleFunc(false);
  }
};

export const getAnsArray = (selectedAnswers: selectionType) => {
  let ansArray = [];
  for (let property in selectedAnswers) {
    if ((selectedAnswers as any)[Number(property)] == true) {
      ansArray.push(Number(property));
    }
  }
  return ansArray;
};

export const ansValidator = (
  selectedAnsArray: Number[],
  actualAnsArray: Number[]
): Boolean => {
  // if there are multiple answers and the user has selected only 1 the answer is wrong
  // if there is 1 ans and user has selected multiple then also the ans is wrong
  if (selectedAnsArray.length != actualAnsArray.length) return false;
  // compare every selected answer with the actual answers if and of them mismatch return false
  for (let i in selectedAnsArray) {
    if (selectedAnsArray[i] != actualAnsArray[i]) {
      return false;
    }
  }
  // if answers match
  return true;
};


 export const changeHandler = (e: React.ChangeEvent<HTMLInputElement> , setSelectedAnswers : React.Dispatch<React.SetStateAction<selectionType>>) => {
    const value = e.currentTarget.name;
    setSelectedAnswers((preval) => {
      return { ...preval, [value]: !(preval as any)[value] };
    });
  };

  export const ansArrayToObject = (data : number[])=>{
    let object = {1 : false , 2: false , 3: false , 4:false}
        for(let i = 0 ; i < data.length ; i++){
            for(let item in obj){
                if(data[i] == Number(item)){
                    (obj as any)[Number(data[i])] = true
                }
            }
        }
    return object
  }