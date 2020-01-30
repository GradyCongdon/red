const todos = (state = [], action) => {
  switch (action.type) {
    case 'TODO:CREATE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ]
    case 'TODO:TOGGLE':
      return state.map(todo => 
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      )
    default:
      return state;
  }
}

export default todos;

