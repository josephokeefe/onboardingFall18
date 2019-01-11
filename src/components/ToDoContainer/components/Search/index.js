import React, { Component } from "react";
import { styles, StyledInput } from "../../styles"


class Search extends Component {

  constructor(props) {

    super()

    this.state = {
      searchInput: "",
    }

  }

  changeHandler = async (event) => {
    await this.setState({ searchInput: event.target.value })
    this.updateDisplayList()
  } 

  updateDisplayList() {

    const newTodoList = this.props.todos.filter(({id, name}) => name.substring(0, this.state.searchInput.length) === this.state.searchInput)

    this.props.searchHandler(newTodoList)

  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label style={ styles }>Search</label>
          <StyledInput name="search" type="text" value={ this.state.searchInput } onChange={ this.changeHandler }></StyledInput>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
