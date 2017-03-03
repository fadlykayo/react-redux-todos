const TodosReducer = (state = [] , action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return action.payload
    case 'ADD_TODOS':
      return state.concat(action.payload)
    case 'DELETE_TODOS':
      return state.filter(todo => todo.id !== action.payload)
    case 'UPDATE_TODOS':
      return state.map(todo => todo.id === action.payload.id ? Object.assign({}, action.payload) : Object.assign({}, todo))
    default:
      return state
  }
}

export default TodosReducer
