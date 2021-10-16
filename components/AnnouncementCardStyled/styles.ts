import styled from 'styled-components'

export const ContainerCardStyled = styled.div`
  margin: 1em;
  box-shadow: 4px 4px 5px gray;
  width: 350px;
  min-height: 500px;
  background-color: lightgray;
  padding: 0.5em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5em;

  span {
    margin-bottom: 0.8em;
  }
`

export const HeaderSpanStyled = styled.span`
  h2 {
    text-transform: uppercase;
  }

  h3 {
    color: white;
  }
`

export const MainSpanStyled = styled.span`
  h2 {
    text-align: center;
  }
  p {
    margin-bottom: 0.8em;
  }

  span {
    display: flex;
    flex-direction: column;
  }
  strong {
    margin-bottom: 0.5em;
    background: blue;
    border-radius: 0.5em;
    color: white;
    width: 100%;
    text-align: center;
    border: 2px solid black;

    span {
      background-color: lightgreen;
      border: 2px solid black;
    }
  }
`
export const FooterSpanStyled = styled.span``
