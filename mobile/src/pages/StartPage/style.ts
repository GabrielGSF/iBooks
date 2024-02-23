import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background: #ffff;
    justifyContent: center;
    margin: 10px;
`;

export const Title = styled.Text`
    fontSize: 32px;
    fontWeight: 700;
    color: #4D2D18;
    lineHeight: 32px;
`;

export const Text = styled.Text`
    fontWeight: 500;
    fontSize: 16px;
    lineHeight: 19.5px;
`;

export const Button = styled.Pressable`
    width: 388px;
    height: 68px;
    borderRadius: 40px;
    color: #4D2D18;
    backgroundColor: #4D2D18;
    justifyContent: center;
    alignItems: center;
`;

export const ButtonText = styled.Text`
    fontSize: 16px;
    fontWeight: 700;
    fontColor: #ffff;
    lineHeight: 19.5px;
`