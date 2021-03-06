import styled from 'styled-components/native';

export const Layout = styled.View`
  background-color: #aa076b;
  flex: 1;
`;

export const CustomText = styled.Text`
  color: ${({clr}) => clr ?? '#fff'};
  margin-top: ${({mt}) => mt ?? '0px'};
  font-size: ${({fz}) => fz ?? '24px'};
  font-weight: ${({fw}) => fw ?? 'bold'};
  text-align: ${({align}) => align ?? 'center'};
`;

export const Container = styled.View`
  flex:1;
  margin: 0px 2.5% 0px 2.5%;
`;
