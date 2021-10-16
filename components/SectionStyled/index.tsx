import React, { ReactNode } from 'react'
import { CustomSectionStyled, BackgroundSpan } from './styles'
import { Star, Tv } from 'react-feather'

interface ISection {
  sectionName: string
  children: ReactNode
}

export default function SectionStyled({ sectionName, children }: ISection) {
  return (
    <CustomSectionStyled>
      <BackgroundSpan>
        <h1>
          {sectionName === 'Depoimentos' && <Star size=".8em" />}
          {sectionName === 'Classificados' && <Tv size=".8em" />}
          {sectionName}
        </h1>
      </BackgroundSpan>
      {children}
    </CustomSectionStyled>
  )
}
