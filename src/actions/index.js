let nextTodoId = 0

export const addTodo = text => ({
  type: 'TODO:CREATE',
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: 'TODO:TOGGLE',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'VISIBILITY_FILTER:UPDATE',
  filter
})


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}
