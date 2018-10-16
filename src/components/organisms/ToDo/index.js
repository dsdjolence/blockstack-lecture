import React, {Component} from 'react'
import './styles.css'
import {getFile, putFile} from 'blockstack'

const fileName = 'blockstack-lecture.json'

class Todo extends Component {
  constructor() {
    super()

    this.state = {
      text: '',
      done: false,
      todos: [],
    }
  }

  add = event => {
    event.preventDefault()
    let {todos, text, done} = this.state
    todos = [...todos, {text, done}]

    this.setState({todos, text: '', done: false})
  }

  save = async () => {
    const {todos} = this.state
    const options = {encrypt: true}
    const input = JSON.stringify(todos)
    const data = await putFile(fileName, input, options)

    console.debug(data)
  }

  read = async () => {
    const options = {decrypt: true}
    const todos = await getFile(fileName, options)

    try {
      this.setState({todos: JSON.parse(todos)})
      console.debug(this.state.todos)
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleCheckboxChange = (event) => {
    const target = event.target
    this.setState({done: target.checked})
  }

  componentWillMount = async () => {
    await this.read()
  }

  renderTable = () => {
    const {todos} = this.state
    if (!todos.length) {
      return <p>No Tasks</p>
    }

    return (
        <table>
          <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          {todos.map(function(todo, index) {
            return (
                <tr key={index}>
                  <td>{todo.text}</td>
                  <td>{todo.done ? 'Finished' : 'Not finished'}</td>
                </tr>
            )
          })}
          </tbody>
        </table>
    )
  }

  render() {
    const {text, done} = this.state
    return (
        <div className="login">
          <h1>Todo list:</h1>
          <form onSubmit={this.add}>
            <label>
              <input style={{width: '300px'}} type="text" value={text} onChange={this.handleChange}/>
            </label>
            <input type="checkbox" checked={done}
                   onChange={this.handleCheckboxChange}/>
            <input style={{width: '100px'}} type="submit" value="Add"/>
            <button style={{float: 'right'}} onClick={this.save}>Save List</button>
          </form>
          <br/>
          {this.renderTable()}
        </div>
    )
  }
}

export default Todo
