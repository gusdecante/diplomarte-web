import React from 'react'
import {
  NavStyled,
  DefaultLogoStyled,
  ContainerIconsStyled,
  UListStyled,
  LItemStyled,
  LTitleStyled,
} from './styles'
import { Home, Bell, Star, Tv, Zap, LogIn } from 'react-feather'

export default function NavBar() {
  return (
    <NavStyled>
      <DefaultLogoStyled>Diplomarte</DefaultLogoStyled>
      <ContainerIconsStyled>
        <UListStyled>
          <LItemStyled>
            <Home />
            <LTitleStyled>início</LTitleStyled>
          </LItemStyled>
          <LItemStyled>
            <Star />
            <LTitleStyled>depoimentos</LTitleStyled>
          </LItemStyled>
          <LItemStyled>
            <Tv />
            <LTitleStyled>classificados</LTitleStyled>
          </LItemStyled>
          <LItemStyled>
            <Zap />
            <LTitleStyled>diplomarte-se</LTitleStyled>
          </LItemStyled>
          <LItemStyled>
            <LogIn />
            <LTitleStyled>login</LTitleStyled>
          </LItemStyled>
        </UListStyled>
      </ContainerIconsStyled>
    </NavStyled>
  )
}
