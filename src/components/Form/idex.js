import React, {useState} from 'react';
import {CustomText} from '../Generals';
import {ContainerForm, ContainerInput, CustomInput} from './styledComponent';
import { View, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Form = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
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
        <View>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </ContainerForm>
    </>
  );
};

export default Form;
