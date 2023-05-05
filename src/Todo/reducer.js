
export const init = {
  task:'',
  tasks: []
}

const reducer = (state, action) =>{
    switch(action.type){
      case 'SET_TASK':
        return{
          // Reverse the old state
          ...state,
          // updated state
          task: action.payload
        }
        
      case 'ADD_TASK':
        return{
          ...state,
          // Reverse the old state given into interface and add the new one into the list
          tasks:[...state.tasks, action.payload]
        }
        
      case 'DELETE_TASK':
        const DeletedTask = [...state.tasks ] 
        DeletedTask.splice(action.payload,1)
        return{
            ...state,
            tasks: DeletedTask
        }
          
      default:
        throw new Error('Invalid action...')
    }
}
export default reducer