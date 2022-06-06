import React from 'react'
import { CustomText } from '../Generals';
import { BtnDelet, ContainerList, ContainerText } from './styledComponent';

const List = ({cita, removePatient}) => {
  const dialogoEliminar = (id) => {
    console.log("Eliminando...", id);
    removePatient(id);
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
      <BtnDelet onPress={ () => dialogoEliminar(cita.id)}>
        <CustomText fz='12px'>Eliminar &times;</CustomText>
      </BtnDelet>
    </ContainerList>
  )
}

export default List;
