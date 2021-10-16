import React from 'react'
import {
  ContainerFooterStyled,
  ContainerButtonStyled,
  CopyrightStyled,
} from './styles'
import { Phone } from 'react-feather'
import { ButtonStyled } from '../'

export default function FooterStyled() {
  return (
    <ContainerFooterStyled>
      <ContainerButtonStyled>
        <ButtonStyled>
          <span>Contato</span>
          <span>
            <Phone />
          </span>
        </ButtonStyled>
      </ContainerButtonStyled>
      <CopyrightStyled>&copy;Decante's sotware | 2021 - 2021</CopyrightStyled>
    </ContainerFooterStyled>
  )
}
