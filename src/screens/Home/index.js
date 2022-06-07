import React, {useState} from 'react';
import {Container, CustomText, Layout} from '../../components/Generals';
import {FlatList} from 'react-native';
import List from '../../components/LIst';
import Form from '../../components/Form/idex';
import { BtnDelet } from '../../components/LIst/styledComponent';
const Home = () => {
  const [showForm, setShowForm] = useState(true);

  const [citas, setCitas] = useState([
    {
      id: '1',
      patient: 'Ipo',
      owner: 'Vladimir',
      symptoms: 'No come',
    },
  ]);

  const removePatient = id => {
    setCitas(citasActuales => {
      return citasActuales.filter(cita => cita.id !== id);
    });
  };

  //Show form
  const showAndHideForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Layout>
      <CustomText>Administrador De Citas</CustomText>
      <BtnDelet onPress={ () => showAndHideForm()}>
        <CustomText fz='12px'>
          {
            showForm ? 'Ocultar formulario' : 'Crear Nueva cita'
          }
        </CustomText>
      </BtnDelet>
      <Container>
        {showForm ? (
          <>
            <CustomText>
              Crear Nueva Cita
            </CustomText>
            <Form 
              citas={citas}
              setCitas={setCitas}
              setShowForm={setShowForm}
            />
          </>
        ) : (
          <>
            <CustomText>
              {citas.length > 0
                ? 'Administra tus ctas'
                : 'No hay citas, agrega una'}
            </CustomText>
            <FlatList
              style={{
                flex: 1,
              }}
              data={citas}
              renderItem={({item}) => (
                <List cita={item} removePatient={removePatient} />
              )}
              keyExtractor={cita => cita.id}
            />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
