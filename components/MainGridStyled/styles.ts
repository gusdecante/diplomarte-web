import styled from 'styled-components'

export const CustomContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-template-rows: 1fr 1fr 1fr;
  padding: 2em 4em;
`

export const ExampleSquare = styled.div`
  width: 100%;
  height: 300px;
  background-color: blue;
  border: 2px solid black;
  cursor: pointer;

  :hover {
    border: 2px solid lightgray;
  }
`
