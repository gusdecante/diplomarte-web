import React from 'react'
import {
  ContainerCardStyled,
  HeaderSpanStyled,
  MainSpanStyled,
  FooterSpanStyled,
} from './styles'
import { ButtonStyled } from '../'
import { AlertCircle } from 'react-feather'

export default function () {
  return (
    <ContainerCardStyled>
      <HeaderSpanStyled>
        <h2>mecânico</h2>
        <h3>Carlos Carbonel</h3>
      </HeaderSpanStyled>
      <MainSpanStyled>
        <h2>Descrição</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          tenetur voluptatem iure nam molestias recusandae eos earum labore,
          praesentium, odio, assumenda velit omnis saepe quisquam aperiam
          impedit soluta dignissimos obcaecati!
        </p>
        <h2>Horários</h2>
        <span>
          <strong>
            Sábado
            <span>10:00 ás 11:00</span>
            <span>13:00 ás 15:00</span>
          </strong>
          <strong>
            Terça-feira
            <span>08:00 ás 10:00</span>
            <span>12:00 ás 14:00</span>
          </strong>
        </span>
      </MainSpanStyled>
      <FooterSpanStyled>
        <ButtonStyled>
          <span>Detalhes</span>
          <span>
            <AlertCircle />
          </span>
        </ButtonStyled>
      </FooterSpanStyled>
    </ContainerCardStyled>
  )
}
