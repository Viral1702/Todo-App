import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:1,text:"Hello World"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id : nanoid(),
                text : action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo : (state,action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? console.log(true) : console.log(false))
        }
    }
})

export const { addTodo , removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer;