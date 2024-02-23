import React from 'react'
import { Image } from 'react-native'
import { LoginForm } from '../../components/LoginForm'
import { NavBar, NavTitle, Header, Container, Title, Text, Main } from './style'
import { Link } from '@react-navigation/native'

export function LoginPage() {
    return (
        <Container>

            <NavBar>
                <Image />
                <NavTitle>Login</NavTitle>
            </NavBar>

            <Header>
                <Title>Bem vindo Novamente</Title>
                <Text>Por favor insira as informações abaixo para avançarmos</Text>
                <Image 
                    source={require('../../assets/logo.png')}
                />
            </Header>

            <Main>
                <LoginForm />
                {/* <Link to={{ screen: }}>Esqueceu sua  Senha?</Link> */}
                <Text>Esqueceu sua Senha?</Text>
            </Main>

        </Container>


    //     <Container>
    //         <Image source={require('../../assets/logo.png')} style={{ width: 150, height: 150 }}/>
    //         <Title>LOGIN</Title>
    //         <LoginForm />
    //     </Container>
     )
}