import React from 'react'
import { CustomText } from '../Generals';
import { ContainerList, ContainerText } from './styledComponent';

const List = ({cita}) => {
  return (
    <ContainerList>
      <ContainerText>
        <CustomText clr='black' fz='18px' mt='20px'>Paciente: </CustomText>
        <CustomText clr='black' fz='18px' fw='normal'>{cita.paciente}</CustomText>
      </ContainerText>
      <ContainerText>
        <CustomText clr='black' fz='18px' mt='20px'>Propietario: </CustomText>
        <CustomText clr='black' fz='18px' fw='normal'>{cita.propietario}</CustomText>
      </ContainerText>
      <ContainerText>
        <CustomText clr='black' fz='18px' mt='20px'>Sintomas: </CustomText>
        <CustomText clr='black' fz='18px' fw='normal'>{cita.sintomas}</CustomText>
      </ContainerText>
    </ContainerList>
  )
}

export default List;
