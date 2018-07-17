import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      visibility: '',
      inputBox: ''
    }

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo (text) {
    const newTodo = {
      todo: text,
      complete: false
    }
    const newTodos = this.state.todos.map((v) => v)
    newTodos.push(newTodo)
    this.setState({todos: newTodos})
  }

  render () {
    return (
      <div>
        <AddTodo onSubmit={this.addTodo} inputValue={this.state.inputBox}/>
        {/* <VisibleTodoList />
        <Footer /> */}
      </div>
    )
  }
}

export default App
