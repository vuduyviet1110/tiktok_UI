import { SET_TODO_INPUT, ADD_TODO_INPUT } from './constants'
export const setToDoInput =payload => {
    return {
        type: SET_TODO_INPUT,
        payload
    }
       
}
export const addToDoInput = payload =>{
    return{
        type: ADD_TODO_INPUT,
        payload
    }
}