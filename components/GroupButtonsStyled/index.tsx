import React from 'react'
import { ContainerButtonsStyled, CustomButtonStyled } from './styles'

export default function () {
  return (
    <ContainerButtonsStyled>
      <CustomButtonStyled buttonColor="white">
        Banco de Tempo
      </CustomButtonStyled>
      <CustomButtonStyled buttonColor="red">
        Economia Solidária
      </CustomButtonStyled>
      <CustomButtonStyled buttonColor="lightgreen">
        Diplomarte
      </CustomButtonStyled>
      <CustomButtonStyled buttonColor="blue">
        Fale com a gente!
      </CustomButtonStyled>
    </ContainerButtonsStyled>
  )
}
