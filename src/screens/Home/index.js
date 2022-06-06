import React, { useState } from 'react';
import { CustomText, Layout } from '../../components/Generals';
import { FlatList } from 'react-native';
import List from '../../components/LIst';
const Home = () => {

  const [ citas, setCitas ] = useState([
    {
      id: '1',
      paciente: 'Ipo',
      propietario: 'Vladimir',
      sintomas: 'No come'
    },
    {
      id: '2',
      paciente: 'Dean',
      propietario: 'Vladimir',
      sintomas: 'No come'
    },
    {
      id: '3',
      paciente: 'Aiko',
      propietario: 'Vladimir',
      sintomas: 'No come'
    }
  ]);

  const removePatient = (id) => {
    setCitas( (citasActuales) => {
      return citasActuales.filter( cita => cita.id !== id )
    } );
  };

  return (
    <Layout>
      <CustomText>Administrador De Citas</CustomText>
      <CustomText>
        {
          citas.length > 0 ? 'Administra tus ctas' : 'No hay citas, agrega una'
        }
      </CustomText>
      <FlatList 
        data={citas}
        renderItem={({item}) => <List cita={item} removePatient={removePatient}/>}
        keyExtractor={cita => cita.id}
      />
    </Layout>
  )
}

export default Home;
