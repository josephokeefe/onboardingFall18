import styled from 'styled-components'

const styles = {
    color: '#7acfd6',
}

const StyledTodo = {
    color: '#e0474c',
}

const StyledGrid = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
}

const AddTodoBlock = styled.div`
    display: flex;
    flex: .33;
    flex-direction: column;
    margin: 1rem;
`

const CurrentTodosBlock = styled.div`
    display: flex;
    flex: .33;
    flex-direction: column;
    margin: 1rem;
`

const SearchBlock = styled.div`
    display: flex;
    flex: .33;
    flex-direction: column;
    margin: 1rem;
`


const StyledButton = styled.button`
  display: inline-block;
  color: #b11a21;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #b11a21;
  border-radius: 3px;
  display: block;
`;

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;


export { styles, StyledTodo, StyledGrid, AddTodoBlock, StyledButton, StyledInput, CurrentTodosBlock, SearchBlock }