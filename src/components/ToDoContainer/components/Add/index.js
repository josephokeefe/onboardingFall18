import React, { Component } from "react";
import uuid from 'uuid'
import { styles, StyledButton, StyledInput } from "../../styles"


class Form extends Component {
  constructor(props) {

    super()

    this.state = {
      todo: "",
    }
  }

  changeHandler = async (event) => {
    await this.setState({ todo: event.target.value })
  } 

  addHandler = (event) => {
    event.preventDefault();

    const newTodo = {
        id: uuid(),
        name: this.state.todo + " "
    }

    this.props.addTodo(newTodo)
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label style={ styles }>Add Todo</label>
          <StyledInput name="todo" type="text" value={ this.state.todo } onChange={ this.changeHandler }></StyledInput>
          <StyledButton type="submit" onClick={ this.addHandler }>Add</StyledButton>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;

