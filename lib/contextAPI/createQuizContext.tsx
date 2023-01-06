import { type } from 'os'
import React, { ReactPropTypes } from 'react'




// types to be exported
type children = {
    children : React.ReactNode
}
 
type createQuizContext = {
    createQuizModalOpen : Boolean,
    openCreateQuizModal : ()=>void,
    closeCreateQuizModal : ()=>void,
    setCreateQuizModal: React.Dispatch<React.SetStateAction<Boolean>>
}

const defaultValue = {
    createQuizModalOpen : false,
    openCreateQuizModal(){},
    closeCreateQuizModal(){},
    setCreateQuizModal(){}
}


// Context Initialized
const createQuizContext = React.createContext<createQuizContext>(defaultValue)
const {Provider} = createQuizContext


// function component starts
export default function QuizContext({children} : children) {

    const [createQuizModalOpen , setCreateQuizModal] = React.useState<Boolean>(false)

    const openCreateQuizModal = ()=>{
        setCreateQuizModal(true)
    }

    const closeCreateQuizModal = ()=>{
        setCreateQuizModal(false)
    }

  return (
    <Provider value={{createQuizModalOpen , openCreateQuizModal , closeCreateQuizModal , setCreateQuizModal}}>
        {children}
    </Provider>
  )
}

export {createQuizContext , QuizContext}
