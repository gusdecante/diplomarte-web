import styled from 'styled-components'

export const ContainerButtonsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 240px;
  height: 240px;
  border-radius: 2em;
  background-color: black;
`

interface ButtonProps {
  buttonColor?: string
}

export const CustomButtonStyled = styled.button<ButtonProps>`
  background-color: blue;
  width: 120px;
  height: 120px;
  font-size: 1.2em;
  font-weight: 700;
  background-color: ${({ buttonColor }) =>
    (buttonColor && buttonColor) || 'blue'};
  color: white;
  text-shadow: 2px 2px black;
  cursor: pointer;
  border-top-left-radius: ${({ buttonColor }) =>
    buttonColor === 'white' && '1em'};
  border-top-right-radius: ${({ buttonColor }) =>
    buttonColor === 'red' && '1em'};
  border-bottom-left-radius: ${({ buttonColor }) =>
    buttonColor === 'lightgreen' && '1em'};
  border-bottom-right-radius: ${({ buttonColor }) =>
    buttonColor === 'blue' && '1em'};
  border: 3px solid black;
`
