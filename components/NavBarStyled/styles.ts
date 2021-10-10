import styled from 'styled-components'
//import { colors } from '../../styles'

export const NavStyled = styled.nav`
  background-color: lightgreen;
  display: flex;
  justify-content: space-between;
  padding: 2em 4em;
`

export const DefaultLogoStyled = styled.span`
  font-size: 2em;
  color: white;
`

export const ContainerIconsStyled = styled.div`
  display: flex;
  align-items: center;
`

export const UListStyled = styled.u`
  display: flex;
  text-decoration: none;
`

export const LItemStyled = styled.li`
  list-style: none;
  display: flex;
  color: white;
  margin: 0 0.5em;
`

export const LTitleStyled = styled.h4`
  margin-left: 0.5em;
  ::first-letter {
    text-transform: capitalize;
  }
`
