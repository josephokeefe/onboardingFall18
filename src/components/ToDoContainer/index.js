import React, { Component } from "react";
import Add from "./components/Add"

class ToDoContainer extends Component {

  constructor() {
    super()

    this.state = ({
      todos: [
        {
          id: 1,
          name: "todo1"
        },
        {
          id: 2,
          name: "todo2"
        },
        {
          id: 3,
          name: "todo3"
        }
      ],
      addTodo: "",
    })
  }

  deleteButtonPressed = id => {
    this.setState({
      todos: this.state.todos.filter((j) => id !== j.id)
    });
    console.log(this.todos)
  };

  addTodo = (todo) => {

    const newTodo = {
      id: 10,
      name: todo
    }

    const list = this.state.todos.push(todo);

    this.setState({
      todos: list
    })

  };


  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.todos.map((todo) => (
            <li>
              { todo.name }
              <button
                type="button"
                onClick={() => this.deleteButtonPressed(todo.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <Add addTodo = { this.addToDo } changeHandler= { this.changeHandler } addInput = { this.state.addTodo } />
      </React.Fragment>
    );
  }
}

export default ToDoContainer;
