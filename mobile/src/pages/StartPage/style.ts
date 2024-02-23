import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background: #ffff;
    justifyContent: center;
    margin: 10px;
    align-items: center;
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

export const StartButton = styled.TouchableOpacity`
    background: #4D2D18;
    width: 388px;
    height: 68px;
    padding: 10px 60px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: #EDE5D6;
`;