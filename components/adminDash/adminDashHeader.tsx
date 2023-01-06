import React from "react";
import Image from "next/image";

// fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

// components 
import ItemMenue from "./itemMenue";

//utils import 
import { handleClickEvent } from "../../lib/utils";

// context import
import { createQuizContext } from "../../lib/contextAPI/createQuizContext";

export default function AdminDashHeader() {
  const [itemMenueIsOpen, setItemMenue] = React.useState<Boolean>(false);
  const {openCreateQuizModal} = React.useContext(createQuizContext)

  const addQuiz = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    console.log("adding quiz");
    openCreateQuizModal()
  };

 // to close the item menue when we click away from the menue
  React.useEffect(() => {
    window.addEventListener("click", (e)=>handleClickEvent( e, setItemMenue , ".dashboard"));

    return () => {
      window.removeEventListener("click", (e)=>handleClickEvent( e, setItemMenue ,".dashboard"));
    };
  }, [0]);

  return (
    <div className="header w-full bg-gray-900 max-w-2xl relative sm:rounded-b-3xl">
      <div className="flex justify-between items-center p-4 relative">
        <div className="flex flex-col items-baseline">
          <p className="text-white text-4xl">Rohit Kumar</p>
          <p className="text-yellow-500">(admin)</p>
        </div>

        <Image
          onClick={(e) => setItemMenue(!itemMenueIsOpen)}
          className="userImage rounded-full bg-white"
          src={"/profile.png"}
          alt=""
          width={60}
          height={60}
        />
        
        {/* We can add more items inside this menue */}
        {itemMenueIsOpen && <ItemMenue />}
      </div>

      {/* the below container is to place the button in center */}
      <div className="w-full flex justify-center items-center absolute -bottom-5">
        <button
          onClick={(e) => addQuiz(e)}
          className="w-10 h-10 bg-red-500 rounded-full flex justify-center items-center text-4xl text-white"
        >
          {" "}
          <FontAwesomeIcon className="text-3xl" icon={faAdd} />{" "}
        </button>
      </div>
    </div>
  );
}
