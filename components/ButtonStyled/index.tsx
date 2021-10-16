import React, { ReactNode } from 'react'
import { CustomButtonStyled } from './styles'

interface Props {
  children: ReactNode
}

export default function ButtonStyled({ children }: Props) {
  return <CustomButtonStyled>{children}</CustomButtonStyled>
}
