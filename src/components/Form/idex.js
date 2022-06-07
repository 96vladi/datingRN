import React, {useState} from 'react';
import {CustomText} from '../Generals';
import {ContainerForm, ContainerInput, CustomInput} from './styledComponent';
import { View, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Form = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const ConfirmDate = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  //Time picker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const ConfirmTime = date => {
    console.warn('A date has been picked: ', date);
    hideTimePicker();
  };

  return (
    <>
      <ContainerForm>
        <ContainerInput>
          <CustomText fz="18px" mt="20px" clr="black" align="left">
            Paciente
          </CustomText>
          <CustomInput
            onChangeText={text => {
              console.log(text);
            }}
          />
        </ContainerInput>
        <ContainerInput>
          <CustomText fz="18px" mt="20px" clr="black" align="left">
            Dueño
          </CustomText>
          <CustomInput
            onChangeText={text => {
              console.log(text);
            }}
          />
        </ContainerInput>
        <ContainerInput>
          <CustomText fz="18px" mt="20px" clr="black" align="left">
            Contacto
          </CustomText>
          <CustomInput
            onChangeText={text => {
              console.log(text);
            }}
            keyboardType="numeric"
          />
        </ContainerInput>
        <View>
          <Button title="Seleccionar fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={ConfirmDate}
            onCancel={hideDatePicker}
          />
        </View>
        <View>
          <Button title="Seleccionar hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={ConfirmTime}
            onCancel={hideTimePicker}
          />
        </View>
        <ContainerInput>
          <CustomText fz="18px" mt="20px" clr="black" align="left">
            Sintomas
          </CustomText>
          <CustomInput
            multiline
            onChangeText={text => {
              console.log(text);
            }}
            keyboardType="numeric"
          />
        </ContainerInput>
      </ContainerForm>
    </>
  );
};

export default Form;
