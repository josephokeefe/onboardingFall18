import React, { Component } from "react";
import ToDoContainer from "./components/ToDoContainer";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

class App extends Component {
  render() {
    
    return (
    <ThemeProvider theme={theme}>
      <ToDoContainer />
    </ThemeProvider>   
    );
  }
}

export default App;
