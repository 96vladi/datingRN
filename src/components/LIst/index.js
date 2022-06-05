import React from 'react'
import { CustomText } from '../Generals';
import { BtnDelet, ContainerList, ContainerText } from './styledComponent';

const List = ({cita}) => {
  const dialogoEliminar = () => {
    console.log("Eliminando...")
  };
  return (
    <ContainerList>
      <ContainerText>
        <CustomText clr='black' fz='18px' mt='20px' align='left'>Paciente: </CustomText>
        <CustomText clr='black' fz='18px' fw='normal' align='left'>{cita.paciente}</CustomText>
      </ContainerText>
      <ContainerText>
        <CustomText clr='black' fz='18px' mt='20px' align='left'>Propietario: </CustomText>
        <CustomText clr='black' fz='18px' fw='normal' align='left'>{cita.propietario}</CustomText>
      </ContainerText>
      <ContainerText>
        <CustomText clr='black' fz='18px' mt='20px' align='left'>Sintomas: </CustomText>
        <CustomText clr='black' fz='18px' fw='normal' align='left'>{cita.sintomas}</CustomText>
      </ContainerText>
      <BtnDelet onPress={ () => dialogoEliminar()}>
        <CustomText>Eliminar &times;</CustomText>
      </BtnDelet>
    </ContainerList>
  )
}

export default List;
