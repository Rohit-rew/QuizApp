import React from 'react'
import Image from 'next/image'


//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch , faClose } from "@fortawesome/free-solid-svg-icons";

// search context
import { UserContext } from '../../lib/contextAPI/userContext';
import ItemMenue from '../itemMenue';
import { handleClickEvent } from '../../lib/utils';

//types
type propTypes = {
  name : string | undefined
}

export default function UserDashHeader({name} : propTypes) {

  const [itemMenueIsOpen , setItemMenue] = React.useState<Boolean>(false)
  const {setSearch , isSearchOpen} = React.useContext(UserContext)

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
          <p className="text-white text-4xl">{name}</p>
          <p className="text-yellow-500">(User)</p>
        </div>

        <Image
          onClick={(e) => setItemMenue(!itemMenueIsOpen)}
          className="userImage rounded-full bg-white"
          src={"/profile.png"}
          alt=""
          width={60}
          height={60}
        />
        
        {itemMenueIsOpen && <ItemMenue />}
      </div>

      {/* the below container is to place the button in center */}
      <div className="w-full flex justify-center items-center absolute -bottom-5">
        <button
          onClick={()=>setSearch(preval=> !preval)}
          className="w-10 h-10 bg-red-500 rounded-full flex justify-center items-center text-4xl text-white"
        >
          {!isSearchOpen ? <FontAwesomeIcon className="text-2xl" icon={faSearch} /> :
          <FontAwesomeIcon className="text-2xl" icon={faClose} />}
        </button>
      </div>
    </div>
  )
}
