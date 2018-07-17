import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo, index) =>
      <Todo
        key={index}
        {...todo}
        onClick={() => toggleTodo(index)}
      />
    )}
  </ul>
)

export default TodoList
