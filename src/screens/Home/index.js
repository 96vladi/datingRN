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

  return (
    <Layout>
      <CustomText>Administrador De Citas</CustomText>
      <FlatList 
        data={citas}
        renderItem={({item}) => <List cita={item}/>}
        keyExtractor={cita => cita.id}
      />
    </Layout>
  )
}

export default Home;
