import styled from 'styled-components'

export const CustomButtonStyled = styled.button`
  color: white;
  border: none;
  border-radius: 0.5em;
  background-color: #47b497;
  font-size: 1.3em;
  padding: 0.3em 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;

  span + span {
    margin-left: 0.3em;
  }
`
