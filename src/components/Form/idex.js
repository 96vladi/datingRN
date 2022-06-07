import React, {useState} from 'react';
import {CustomText} from '../Generals';
import {ContainerForm, ContainerInput, CustomInput} from './styledComponent';
import { View, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { BtnDelet } from '../LIst/styledComponent';

const Form = () => {

  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [contact, setContact] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const ConfirmDate = date => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    };
    setDate(date.toLocaleDateString('es-ES', options));
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
    const options = {
      hour: 'numeric',
      minute: '2-digit'
    };
    setTime(date.toLocaleString('es-ES', options));
    hideTimePicker();
  };

  //create New Appointment
  const createNewAppointment = () => {
    console.log('Desde createNewAppointment');
  };

  return (
    <>
      <ContainerForm>
        <ContainerInput>
          <CustomText fz="18px" mt="10px" clr="black" align="left">
            Paciente
          </CustomText>
          <CustomInput
            onChangeText={text => {
              setPatient(text);
            }}
          />
        </ContainerInput>
        <ContainerInput>
          <CustomText fz="18px" mt="10px" clr="black" align="left">
            Dueño
          </CustomText>
          <CustomInput
            onChangeText={text => {
              setOwner(text);
            }}
          />
        </ContainerInput>
        <ContainerInput>
          <CustomText fz="18px" mt="10px" clr="black" align="left">
            Contacto
          </CustomText>
          <CustomInput
            onChangeText={text => {
              setContact(text);
            }}
            keyboardType="numeric"
          />
        </ContainerInput>
        <View>
          <CustomText fz="18px" mt="10px" clr="black" align="left">
            Fecha
          </CustomText>
          <Button title="Seleccionar fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={ConfirmDate}
            onCancel={hideDatePicker}
          />
          <CustomText fz="18px" mt="10px" clr="black" align="left">
            {date}
          </CustomText>
        </View>
        <View>
          <CustomText fz="18px" mt="10px" clr="black" align="left">
            Hora
          </CustomText>
          <Button title="Seleccionar hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={ConfirmTime}
            onCancel={hideTimePicker}
          />
          <CustomText fz="18px" mt="10px" clr="black" align="left">
            {time}
          </CustomText>
        </View>
        <ContainerInput>
          <CustomText fz="18px" mt="10px" clr="black" align="left">
            Sintomas
          </CustomText>
          <CustomInput
            multiline
            onChangeText={text => {
              setSymptoms(text);
            }}
            keyboardType="numeric"
          />
        </ContainerInput>
        <BtnDelet onPress={ () => createNewAppointment() }>
          <CustomText fz='12px'>Create New Appointment</CustomText>
        </BtnDelet>
      </ContainerForm>
    </>
  );
};

export default Form;
