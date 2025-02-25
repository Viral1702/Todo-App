import React, { useState } from 'react'
import {addTodo} from "../features/todo/todoSlice"
import {useDispatch} from 'react-redux'

const AddTodo = () => {

    const [input,setInput] = useState("")
     const dispatch = useDispatch(); 
    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo({text : input}))
        setInput("")
    }

  return (
    <>
        
    </>
  )
}

export default AddTodo
