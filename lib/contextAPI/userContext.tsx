import React from 'react'

//types
type propType = {
    children : React.ReactNode
}

type contextType = {
  setSearch : React.Dispatch<React.SetStateAction<boolean>>
  isSearchOpen: Boolean
  setGraphModal : React.Dispatch<React.SetStateAction<boolean>>
  isGraphModalOpen : boolean
}

const defaultValue = {
  setSearch(){},
  isSearchOpen:false,
  setGraphModal(){},
  isGraphModalOpen:false
}

// context api initialized
const UserContext = React.createContext<contextType>(defaultValue)
const {Provider} = UserContext

// function  starts
function UserContextProvider({children} : propType) {
  const [isSearchOpen , setSearch] = React.useState(false)
  const [isGraphModalOpen , setGraphModal] = React.useState(false)


  return (
    <Provider value={{setSearch ,isSearchOpen ,setGraphModal ,isGraphModalOpen}}>
        {children}
    </Provider>
  )
}

export {UserContextProvider , UserContext}