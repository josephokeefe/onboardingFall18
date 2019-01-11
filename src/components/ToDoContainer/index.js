import React, { Component } from "react";
import Add from "./components/Add"
import Search from "./components/Search"
import { styles, StyledTodo, StyledGrid, StyledDiv, StyledButton } from "./styles"
import { Grid } from 'react-flexbox-grid';

class ToDoContainer extends Component {

  constructor() {
    super()

    this.state = ({
      todos: [],
      displayTodos: [],
    })

    const styles = {
      color: 'red'
    }

  }

  deleteButtonPressed = id => {
    this.setState({
      todos: this.state.todos.filter((j) => id !== j.id),
      displayTodos: this.state.todos.filter((j) => id !== j.id),
    });
  };

  addTodo = (todo) => {

    const list = [...this.state.todos, todo];

    this.setState({
      todos: list,
      displayTodos: list
    })

  };

  searchHandler = (newDisplayList) => {

    this.setState({
      displayTodos: newDisplayList
    })

  }


  render() {
    return (
      <React.Fragment>


        <Grid fluid style={ StyledGrid }>
        

          <StyledDiv>
            <Add addTodo = { this.addTodo }/>
          </StyledDiv>

          <StyledDiv>
            <h3 style={ styles }>Your Todos:</h3>
            <ol>
              {this.state.displayTodos.map(({id, name}) => (
                <li style={ StyledTodo }>
                  { name }
                  <StyledButton
                    type="button"
                    onClick={() => this.deleteButtonPressed(id)}
                  >
                    Delete
                  </StyledButton>
                </li>
              ))}
            </ol>
          </StyledDiv>

          <StyledDiv>
          <Search searchHandler = { this.searchHandler } todos = { this.state.todos }/>
          </StyledDiv>
            
        </Grid>

      </React.Fragment>
    );
  }
}

export default ToDoContainer;
