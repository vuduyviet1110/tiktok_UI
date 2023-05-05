
export const setTask = payload =>{
    return {
      type: 'SET_TASK',
      payload
    }
}

export const addTask = payload =>{
    return {
      type: 'ADD_TASK',
      payload
    }
}

export const deleteTask = payload =>{
    return {
      type: 'DELETE_TASK',
      payload
    }
}