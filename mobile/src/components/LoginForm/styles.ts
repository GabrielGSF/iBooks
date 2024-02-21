import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 80px;
    width: 80%;
    align-items: center;
`;

export const InputContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const StyledInput = styled.TextInput`
    width: 100%;
    height: 50px;
    padding: 10px 60px;
    border-radius: 10px;
    background: #9b59b6;
`;

export const LoginButton = styled.TouchableOpacity`
    background: #3498db;
    width: 100%;
    height: 50px;
    padding: 10px 60px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
`;

export const TextButton = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;