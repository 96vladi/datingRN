import React, { useState } from 'react'
import { CustomText } from '../Generals'
import { ContainerForm, ContainerInput, CustomInput } from './styledComponent'

const Form = () => {
  return (
    <>
      <ContainerForm>
        <ContainerInput>
          <CustomText fz='18px' mt='20px' clr='black' align='left'>Paciente</CustomText>
          <CustomInput 
            onChangeText = { (text) => {
              console.log(text);
            }}
          />
        </ContainerInput>
        <ContainerInput>
          <CustomText fz='18px' mt='20px' clr='black' align='left'>Dueño</CustomText>
          <CustomInput 
            onChangeText = { (text) => {
              console.log(text);
            }}
          />
        </ContainerInput>
        <ContainerInput>
          <CustomText fz='18px' mt='20px' clr='black' align='left'>Contacto</CustomText>
          <CustomInput 
            onChangeText = { (text) => {
              console.log(text);
            }}
            keyboardType= 'numeric'
          />
        </ContainerInput>
        <ContainerInput>
          <CustomText fz='18px' mt='20px' clr='black' align='left'>Sintomas</CustomText>
          <CustomInput 
            multiline
            onChangeText = { (text) => {
              console.log(text);
            }}
            keyboardType= 'numeric'
          />
        </ContainerInput>
      </ContainerForm>
    </>
  )
}

export default Form
