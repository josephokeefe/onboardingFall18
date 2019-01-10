import React, { Component } from "react";


class Form extends Component {
  constructor(props) {

    super()

    this.state = {
      todo: "",
    }
  }

  changeHandler = async (event) => {
    await this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  } 

  addHandler = (event) => {
    this.setState({ submit: !this.state.submit })
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <br/>
        <div>
          <label>Todo</label>
          <br/>
          <input name="todo" type="text" value={ this.state.todo } onChange={ this.changeHandler }></input>
        </div>
        <button type="submit" onClick={ this.props.addTodo(this.todo) }>Add</button>
        
      </React.Fragment>
    );
  }
}

export default Form;

