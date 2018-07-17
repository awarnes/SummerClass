import React from 'react'

export default class AddTodo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleChange (evt) {
    this.setState({input: evt.target.value})
  }

  handleAddTodo () {
    this.props.onSubmit(this.state.input)
  }

  render () {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.handleChange.bind(this)}
        />
        <button
          onClick={this.handleAddTodo.bind(this)}
        >
        Add Todo
        </button>
      </div>
    )
  }
}
